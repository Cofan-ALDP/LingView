const { fetchMaterialsMetadata, validateMaterialsFiles } = require('./lib/fetch_materials');
const { promises: { writeFile } } = require('fs');
const { resolve } = require('path');

const newDatabaseDest = 'data/materials_index.json';
const newDatabaseDestAbs = resolve(__dirname, '..', '..', newDatabaseDest);
module.exports = { newDatabaseDestAbs };

module.exports.buildMaterials = async function buildMaterials() {
  try {
    console.log("Fetching materials...");
    let records = await fetchMaterialsMetadata();
    console.log("Validating urls...");
    records = await validateMaterialsFiles(records);
    console.log("Updating the materials index...");
    records = await writeFile(newDatabaseDestAbs, JSON.stringify(records, null, 2), 'utf8').then(() => records);
    console.log('Done.', records.length, 'publication materials loaded,', records.filter(r => r.itemServerUrl).length, 'with a file/folder.')
  } catch (err) {
    console.error(err);
  }
}

if (require.main === module) {
  buildMaterials();
}

// Steps of the build process (should be documented more formally):
// 1. fetch material metadata
// 2. validate materials URLs (i.e., make sure the materials are available on the library server)
// 3. save the output to a materials-index.json, which will be read locally (in the browser) and its contents read and rendered by a React component called "Materials"
