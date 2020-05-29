const fs = require('fs');
const path = require('path');

const flex = require('./preprocess_flex');
const elan = require('./preprocess_eaf');
// const db = require('./build_database');

const flexFilesDir = "data/flex_files/";
const elanFilesDir = "data/elan_files/";
const jsonFilesDir = "data/json_files/";
const isoFileName = "preprocessing/iso_dict.json";
const indexFileName = "data/index.json"; // stores metadata for all documents
// const dbFileName = "data/database.json";

console.log("Converting all files to .JSON. The index and metadata will also be updated during this process. Status messages will appear below:")

global.missingMediaFiles = [];

// use this to wait for things to terminate before executing the callback
const status = {numJobs: 2};
const whenDone = function () {
  status.numJobs--;
  if (status.numJobs <= 0) {
    console.log('Done preprocessing ELAN and FLEx!');
    // console.log("Building database...");
    // db.build(jsonFilesDir, indexFileName, dbFileName);

    console.log(global.missingMediaFiles.length, 'Missing media files:', global.missingMediaFiles);
  }
};

const indexPath = path.resolve(__dirname, '..', indexFileName);
if (!fs.existsSync(indexPath)) {
  fs.writeFileSync(indexPath, '{}', 'utf8');
}
elan.preprocess_dir(elanFilesDir, jsonFilesDir, whenDone);
flex.preprocess_dir(flexFilesDir, jsonFilesDir, isoFileName, whenDone);