const { fetchMaterialsMetadata, validateMaterialsFiles } = require('./lib/fetch-materials');
const { promises: { writeFile } } = require('fs');
const { resolve } = require('path');

const newDatabaseDest = 'data/materials_index.json';

const newDatabaseDestAbs = resolve(__dirname, '..', '..', newDatabaseDest);

module.exports = { newDatabaseDestAbs };

async function rebuild() {
	try {
		console.log("fetching materials...");
		let records = await fetchMaterialsMetadata();
		console.log("validating urls...");
		records = await validateMaterialsFiles(records);
		console.log("updating the materials index...");
		records = await writeFile(newDatabaseDestAbs, JSON.stringify(records, null, 2), 'utf8').then(() => records);
		console.log(records);
		console.log("done");
		console.log('Done.', records.length, 'publication materials loaded,', records.filter(r => r.itemServerUrl).length, 'with a file/folder.')
	} catch (err) {
		console.error(err);
	}

		//.then(records => validateMaterialsFiles(records))
    //.then(records => writeFile(newDatabaseDestAbs, JSON.stringify(records, null, 2), 'utf8').then(() => records))
    // .then(records => console.log('Done.', records.length, 'publication materials loaded,', records.filter(r => r.itemServerUrl).length, 'with a file/folder.')) // this line runs before validateMaterialsFiles is done, so it doesn't work right
    //.catch(console.error.bind(console));
}

if (require.main === module) {
  rebuild();
}

// Steps of the build process (should be documented more formally):
// 1. fetch material metadata
// 2. validate materials URLs (i.e., make sure the materials are available on the library server)
// 3. save the output to a materials-index.json, which will be read locally (in the browser) and its contents read and rendered by a React component called "Materials"