const { resolve, join, relative } = require('path');
const { promises: { mkdir, stat } } = require('fs');
const gm = require('gm');
const syncFetchHeadTest = require('sync-rpc')(require.resolve('../../fetch_head_test'));

const Airtable = require('airtable');
const AIRTABLE_API_KEY = ""; // never commit the real value for this!
const AIRTABLE_BASE_ID = "appzdu4UrBFMoG7Rl";

const labServerMaterialsDirectoryUrl = "file://files.brown.edu/Research/CLPS_AnderBois_Lab/Literature/All%20things%20A'ingae/";
const materialsDirectoryUrl = "https://cds.library.brown.edu/projects/kofan/Materials/";

function checkPathExists(path) {
  return stat(path).then(info => info.isFile() || info.isDirectory());
};
module.exports.checkPathExists = checkPathExists;

const md = require('markdown-it')({
  html: false, // for security; if need to enable HTML, use a sanitizer module
  linkify: true,
  typographer: true,
});

module.exports.fetchMaterialsMetadata = function fetchMaterialsMetadata() {
  const base = new Airtable({apiKey: AIRTABLE_API_KEY}).base(AIRTABLE_BASE_ID);
  return new Promise((res, rej) => {
    const resourceRecords = [];
    base('Works').select({
      // view: 'Resources Page View',
      filterByFormula: 'AND(NOT({Private?} = "true"), NOT({LV item} = BLANK()))',
      sort: [{field: 'Year', direction: 'desc'}],
      maxRecords: 5, // TEMP
    }).eachPage(function page(records, fetchNextPage) {
      records.forEach((record) => {
        if (!record.fields['Item'].includes(record.fields['LV item'][0])) {
          console.warn('Mistake made when choosing LV item; not a member of Item - ', record.fields['Title']);
        }
        console.log(record.fields); // TEMP
        const {
          ['Title']: title,
          ['Credit First Last Names']: credits, // [creditString],
          ['Year']: yearRaw,
          ['Description']: descriptionMarkdown,
          ['Category']: categories,
          ['Type']: type,
          ['LV curated?']: curatedFlag,
          ['LV Item Server']: [itemLabServerUrl] = '',
        } = record.fields;
        // const credits = (creditString || '').split(',').map(s => s.trim());
        const year = typeof yearRaw === "string" ? yearRaw : (yearRaw ? yearRaw[0] : undefined);
        const descriptionHTML = descriptionMarkdown ? md.render(descriptionMarkdown) : '';
        const isCurated = curatedFlag === true;
        const itemServerUrl = itemLabServerUrl.replace(labServerMaterialsDirectoryUrl, materialsDirectoryUrl);
        const extractedRecord = { title, credits, year, descriptionHTML, categories, type, isCurated, itemServerUrl };
        resourceRecords.push(extractedRecord);
      });

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();
    }, function done(err) {
      if (err) rej(err);
      else res(resourceRecords);
    });
  });
}

// calls syncFetchHeadTest(itemServerUrl)
// returns [{itemServerUrl1: itemServerUrl1, ...}]
// Note: for directories, the library server returns a 403 Forbidden status.
// We should ask the library server admins to change this so users can browse those directories.
// For now, let's consider those URLs invalid and exclude them.
module.exports.validateMaterialsFiles = function validateMaterialsFiles(resourceRecords) {
  if (process.env.METADATA_ONLY) {
    console.log('Performing fake publication materials fetch as requested. No file/folder url validation will be done.');
  }
  let recordsLeft = resourceRecords.length;
  return Promise.all(resourceRecords.map((record) => {
    const { itemServerUrl, ...restRecord } = record;
    if (itemServerUrl) {
      let remoteUrlHeadSuccess;
      try {
        remoteUrlHeadSuccess = syncFetchHeadTest(itemServerUrl); // TODO let it be async
      } catch (err) {
        console.warn(`Error downloading resource file: ${itemServerUrl}`, record, err);
      }
      const validatedUrl = remoteUrlHeadSuccess ? itemServerUrl : '';
      return Promise.resolve({ itemServerUrl: validatedUrl, ...restRecord })
          .finally(() => {
            console.info('Records left to validate:', --recordsLeft);
          });
    } else {
      console.info('Records left to validate:', --recordsLeft);
      return Promise.resolve({ itemServerUrl: '', ...restRecord });
    }
  }));
}

const { thumbnailProperties } = require('../shared');

// returns { thumbnailImageUrl1: relative(baseDir, destPath1), ...}
// needs to be modified to use non-downloaded library server PDFs
module.exports.generateThumbnails = function generateThumbnails(resourceRecords) {
  const baseDir = resolve(__dirname, '..', '..', '..');
  const destDir = join(baseDir, 'data', 'saved-materials-thumbs');

  let recordsLeft = resourceRecords.length;
  return mkdir(destDir, { recursive: true })
    .then(() =>
      Promise.all(resourceRecords.map(async (record) => {
        try {
          const { itemServerUrl } = record;

          if (!itemServerUrl || !itemServerUrl.toLowerCase().endsWith('.pdf')) { // note: only pdfs are handled right now
            return { thumbnailImageUrl: '', ...record };
          }
          
          // TODO needs updating
          const destName = relative(baseDir, itemServerUrl).replace(/\//g, '-').replace(/\.pdf$/i, '.jpg');
          const destPath = join(destDir, destName);

          if (process.env.NEWONLY && await checkPathExists(destPath)) {
            return { thumbnailImageUrl: '', ...record };
          }

          try {
            await new Promise((resolve, reject) => {
              // credit: https://stackoverflow.com/questions/51033963/thumbnail-the-first-page-of-a-pdf-from-a-stream-in-graphicsmagick
              gm(itemServerUrl) // TODO use the library server path; may require ".selectFrame(0)" as described on SO
              .selectFrame(0)
                .background(thumbnailProperties.backgroundColor)
                .flatten()
                .resize(thumbnailProperties.width, thumbnailProperties.height)
                .write(destPath, (err, result) => {
                  if (err) return reject(err);
                  resolve(result);
                });
            });
            return { thumbnailImageUrl: relative(baseDir, destPath), ...record };
          } catch (err) {
            console.warn(`Error creating thumbnail for: ${itemServerUrl}`, /* record, */ err);
            return { thumbnailImageUrl: '', ...record };
          }
        } finally {
          console.info('Records left to process:', --recordsLeft);
        }
      }))
    );
}
