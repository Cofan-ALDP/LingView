const { resolve, join, relative } = require('path');
const { promises: { mkdir, stat } } = require('fs');
const urlExists = require('../../url_exists')();
const fetch = require('isomorphic-fetch');
const Airtable = require('airtable');

// both versions of the lab server URL are currently in use for different items
const labServerMaterialsDirectoryUrl = "file://files.brown.edu/Research/CLPS_AnderBois_Lab/Literature/All%20things%20A'ingae/";
const labServerMaterialsDirectoryUrl2 = "file://files.brown.edu/Research/CLPS_AnderBois_Lab/Literature/All things A'ingae/";
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
  const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE_ID);
  return new Promise((res, rej) => {
    const resourceRecords = [];
    base('Works').select({
      filterByFormula: 'AND(NOT({Private?} = "true"), NOT({LV item} = BLANK()))',
      sort: [{field: 'Year', direction: 'desc'}],
      // maxRecords: 10, // TEMP
    }).eachPage(function page(records, fetchNextPage) {
      records.forEach((record) => {
        if (!record.fields['Item'].includes(record.fields['LV item'][0])) {
          console.warn('Mistake made when choosing LV item; not a member of Item - ', record.fields['Title']);
        }
        const {
          ['Title']: title,
          ['Credit First Last Names']: credits,
          ['Year']: yearRaw,
          ['Description']: descriptionMarkdown,
          ['Category']: categories,
          ['Type']: type,
          ['LV curated?']: curatedFlag,
          ['LV Item Server']: [itemLabServerUrl] = '',
        } = record.fields;
        const year = typeof yearRaw === "string" ? yearRaw : (yearRaw ? yearRaw[0] : undefined);
        const descriptionHTML = descriptionMarkdown ? md.render(descriptionMarkdown) : '';
        const isCurated = curatedFlag === true;
        
        let itemServerUrl = itemLabServerUrl.replace(
            labServerMaterialsDirectoryUrl, materialsDirectoryUrl
          ).replace(
            labServerMaterialsDirectoryUrl2, materialsDirectoryUrl
          );
        if (itemServerUrl.substring(0, 4) !== "http") {
          console.warn("Lab server URL had unexpected formatting and can't be used: " + itemServerUrl);
          // replace URL with empty string so that we never try to validate a "file://" url, 
          // which would cause node-fetch to throw an error
          itemServerUrl = '';
        }
        
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

// calls urlExists(itemServerUrl)
// returns the same list of records as the input, except with invalid itemServerUrls set to ''
// Note: for directories, the library server returns a 403 Forbidden status,
// and the library admins are unwilling to change this.
// We should make index.html pages in each directory that link to the directory's contents,
// in order to make the directories browsable. 
// Until that's done, let's consider those URLs invalid and exclude them.
module.exports.validateMaterialsFiles = async function validateMaterialsFiles(resourceRecords) {
  // put the recordsLeft number inside a dictionary so it can be shared across function calls
  let recordsLeft = {value: resourceRecords.length}; 
  return await Promise.all(resourceRecords.map((record) => validateRecord(record, recordsLeft)));
}

function validateRecord(record, recordsLeft) {
  return new Promise((resolve, reject) => {
    const { itemServerUrl, ...restRecord } = record;
    let validatedUrl = '';
    if (itemServerUrl) {
      urlExists(itemServerUrl).then((ok) => {
        if (ok) {
          validatedUrl = itemServerUrl;
        }
      }).catch((err) => {
        console.warn(`Error downloading resource file: ${itemServerUrl}`, record, err)
      }).finally((info) => {
        console.info('Records left to validate:', recordsLeft.value--);
        return resolve({ itemServerUrl: validatedUrl, ...restRecord });
      });
    } else {
      console.info('Records left to validate:', recordsLeft.value--);
      return resolve({ itemServerUrl: '', ...restRecord });
    }
  });
}
