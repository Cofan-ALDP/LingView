// On any platform: User must be on the Brown network (physically or virtually, i.e. via VPN)

// On Windows: user must have already logged into the server share [and have Windows save their credentials]
// On macOS/Linux: user must have smbclient installed (can be installed on Ubuntu with: $ sudo apt-get install smbclient)

// Make sure the latest version of smbclient is installed! Might be necessary to avoid bugs, e.g. while downloading large files.

// Requires Node.js 10+

const { promises: { mkdir } } = require('fs');
const { dirname, relative } = require('path');
const { checkPathExists } = require('./fetch-materials');

const createDirPath = dirPath => mkdir(dirPath, { recursive: true }).then(() => dirPath);
const createFilePath = filePath => createDirPath(dirname(filePath));

const isWin = process.platform === 'win32';

if (isWin) {
  // TODO: test this! (in general, I do recommend WSL for dev on Windows, though)
  // const { readFileStream, createWriteStream } = require('fs');
  // const stream = require('stream');
  // const { promisify } = require('util');

  // const pipeline = promisify(stream.pipeline);
  // module.exports = (sambaSettings) => {
  //   const saveFromSmb = (srcFilePath, destPath) =>
  //     createFilePath(destPath)
  //       .then(() => pipeline(
  //         readFileStream(`${sambaSettings.address}/${srcFilePath}`),
  //         createWriteStream(destPath),
  //       ));
  //   return saveFromSmb;
  // };
  throw new Error('Tentative Windows implementation disabled while developing new Linux implementation');
} else {
  // const SambaClient = require('samba-client');
  const { exec } = require('child-process-promise');

  module.exports = (sambaSettings) => {
    // const sambaClient = new SambaClient(sambaSettings);

    const saveFromSmb = async (srcFilePath, destPath) => {
      const destPathRel = relative(__dirname + "/../../../", destPath);
      if (process.env.METADATA_ONLY || (process.env.NEWONLY && await checkPathExists(destPath))) {
        return { output: '', destPath: destPathRel };
      }
      // HACK: maybe this check shouldn't be so simple as just to check the path ending
      const destPathDir = await (srcFilePath.endsWith('.pdf') ? createFilePath(destPath) : createDirPath(destPath)); 
      // await sambaClient.getFile(srcFilePath, destPath);
      const output = await exec(String.raw`cd "${destPathDir}" && smbget --recursive --update --nonprompt --user='${
        sambaSettings.username}%${sambaSettings.password}' "smb:${sambaSettings.address}/${srcFilePath}"`);
        // ^^ is passing credentials as command arguments insecure?

        // String.raw`smbclient -s smb.conf -U '${process.env.LAB_SERVER_USERNAME
        // }' -c "get \"${srcFilePath}\" \"${destPath
        // }\"" ${process.env.LAB_SERVER_ADDRESS} '${process.env.LAB_SERVER_PASSWORD}'`))
        // is passing credentials as command arguments insecure? ^
      return { output, destPath: destPathRel };
    }

    return saveFromSmb;
  };
}


// Old scraps:

// const stream = require('stream');
// const {promisify} = require('util');
// const fs = require('fs');
// // const got = require('got');

// const pipeline = promisify(stream.pipeline);

// // load the library
// const SMB2 = require('smb2');

// // create an SMB2 instance
// const smb2Client = new SMB2({
//   share:,
//   domain:,
//   username:,
//   password:,
// });

// const smbReadFile = promisify(smb2Client.readFile);

// return await smbReadFile(url);
  // smb2Client.readFile(url, (err, data) => {
  //   console.log(err);
  //   console.log(typeof data);
  // });
  // return 3;

  // const smbStream = smb2Client.createReadStream(url);
  // smbStream.on('end', function () {
  //   console.log('File copied');
  // });

  // return await pipeline(
  //   smbStream,
  //   fs.createWriteStream(destPath)
  // );
// download(`Literature\\All things A'ingae\\AINGAE_V_ocr.pdf`)
//   .then(console.log.bind(console))
//   .catch(console.error.bind(console)); 