// console.error("generate-thumbnails.js is not used right now; using https://github.com/scandel/pdfThumbnails/ instead")

// to be run by GitHub Actions as part of the build process

const { promises: { writeFile } } = require('fs');
const { generateThumbnails } = require("./lib/fetch-materials");
const { newDatabaseDestAbs } = require("./rebuild");

generateThumbnails(require(newDatabaseDestAbs))
    .then(records => writeFile(newDatabaseDestAbs, JSON.stringify(records, null, 2), 'utf8').then(() => records))
    .then(records => console.log('Done.', records.length, 'publication materials processed,', records.filter(r => r && r.thumbnailImageUrl).length, 'with a thumbnail ready.'))
    .catch(console.error.bind(console));