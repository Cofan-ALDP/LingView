const { fetchMaterialsMetadata, fetchMaterialsFiles } = require('./lib/fetch-materials');
const { promises: { writeFile } } = require('fs');
const { resolve } = require('path');

const newDatabaseDest = 'data/materials_index.json';

const newDatabaseDestAbs = resolve(__dirname, '..', '..', newDatabaseDest);

module.exports = { newDatabaseDestAbs };

if (require.main === module) {
  fetchMaterialsMetadata()
    .then(records => fetchMaterialsFiles(records))
    .then(records => writeFile(newDatabaseDestAbs, JSON.stringify(records, null, 2), 'utf8').then(() => records))
    .then(records => console.log('Done.', records.length, 'publication materials loaded,', records.filter(r => r.savedPath).length, 'with a file/folder.'))
    .catch(console.error.bind(console));
}

// Steps of the build process (should be documented more formally):
// 1. fetch material metadata
// 2. fetch material files
// 3. save the output to a materials-index.json, which will be read locally (in the browser) and its contents read and rendered by a React component called "Materials"