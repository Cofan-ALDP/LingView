const fs = require('fs');

const syncFetchHeadTest = require('sync-rpc')(require.resolve('./fetch_head_test'));
const flexUtils = require('./flex_utils'); // TODO use me more, and use eafUtils too, for stylistic consistency

function getMetadataFromIndex(filename) {
  // I/P: filename, an XML or EAF file
  // O/P: a JSON object with metadata for the given file;
  //      or null if filename not in index
  // Status: tested, working
  const index = JSON.parse(fs.readFileSync("data/index.json", "utf8"));
  if (index.hasOwnProperty(filename)) {
    return index[filename];
  } else {
    return null;
  }
}

function getFilenameFromPath(path) {
  // I/P: path, a string
  // O/P: the filename which occurs at the end of the path
  // Status: untested
  const begin = path.lastIndexOf("/") + 1; // @Kalinda, this might fail on windows.
  return path.substring(begin, path.length);
}

function getFlexMediaFilenames(itext) {
  let filenames = [];
  const mediaFiles = itext["media-files"];
  if (mediaFiles != null) {
    const mediaList = mediaFiles[0].media;
    for (const media of mediaList) {
      filenames.push(media.$.location);
    }
  }
  return filenames;
}

function verifyMedia(filename) {
  // I/P: filename, a .mp3 or .mp4 file
  // O/P: boolean, whether or not file exists in media_files directory
  // Status: untested
  const media_files = fs.readdirSync("data/media_files");
  return (media_files.indexOf(filename) >= 0);
}

function findValidMedia(filenames) {
  // I/P: filenames, a list of filenames (file extension included) that would be considered a match
  // O/P: the first filename in the list that we can use as media, or null if none was found
  for (const mediaFilename of filenames) {
    if (verifyMedia(mediaFilename)) {
      return mediaFilename;
    }
  }
  return null;
}

function mediaSearch(filename, mediaType, mediaFiles, extensions) {
  // I/P: filename, the name of the ELAN or FLEx file
  // I/P: mediaType, which is either "video" or "audio", for printing to the command line
  // I/P: mediaFiles, a list of the media files that were linked in the ELAN or FLEx file
  // I/P: extensions, file extensions for media files, including the leading period (some iterable type, e.g. array or set)
  // O/P: the filename of the first valid media that was found, or null if none exists
  console.log("🚨  WARN: " + filename + " is missing correctly linked " + mediaType + ". Attemping to find link...");
  const shortFilename = filename.substring(0, filename.lastIndexOf('.'));
  const shortestFilename = filename.substring(0, filename.indexOf('.')); // more possible matches for .postflex.flextext files
  const filenamesToTry = mediaFiles;
  for (const extension of extensions) {
    filenamesToTry.push(shortFilename + extension);
    filenamesToTry.push(shortestFilename + extension);
  }
  
  let mediaFile = findValidMedia(filenamesToTry);
  if (mediaFile != null) {
    console.log("🔍  SUCCESS: Found matching " + mediaType + ": " + mediaFile);
  } else if (process.env.MISSING_MEDIA === 'ignore' || process.env.MISSING_MEDIA === 'link') {
    console.log("🥽 Attempting to locate media in remote storage...");

    let remoteMedia, erred = false;
    try {
      remoteMedia = remoteMediaSearch(filenamesToTry);
    } catch (err) {
      console.log('Error while trying to locate media in remote storage:', err);
      erred = true;
    }

    if (erred || remoteMedia.filename == null) {
      console.log("👎 Failed to find requested media in remote storage for any of:", filenamesToTry);
    } else if (process.env.MISSING_MEDIA === 'ignore') {
      console.log("🥽 FOUND! Adding to list of required media.");
      mediaFile = remoteMedia.filename;
      if (global.missingMediaFiles) global.missingMediaFiles.push(`${remoteMedia.filename} (at ${remoteMedia.remoteUrl})`);
    } else if (process.env.MISSING_MEDIA === 'link') {
      console.log("🥽 FOUND! Linking to remote url...");
      mediaFile = remoteMedia.remoteUrl;
    }
  } else if (typeof process.env.MISSING_MEDIA !== 'undefined') {
    console.log("⚠ Unsupported value", process.env.MISSING_MEDIA, "for MISSING_MEDIA env variable.");
  }

  if (mediaFile == null) {
    console.log("❌  ERROR: Cannot find matching " + mediaType + " for " + shortFilename + ". ");
    if (global.missingMediaFiles) global.missingMediaFiles.push(filenamesToTry);
  }
  return mediaFile;
}

function remoteMediaSearch(filenamesToTry) {
  if (!process.env.REMOTE_MEDIA_PATH || typeof process.env.REMOTE_MEDIA_PATH !== "string") {
    throw new Error(`Unsupported value ${process.env.REMOTE_MEDIA_PATH} for REMOTE_MEDIA_PATH env variable.`);
  }

  for (const filename of filenamesToTry) {
    const remoteUrl = `${process.env.REMOTE_MEDIA_PATH.replace(/\/$/, '')}/${filename}`;
    let remoteUrlHeadSuccess;
    try {
      remoteUrlHeadSuccess = syncFetchHeadTest(remoteUrl);
    } catch (err) {
      console.log(err);
      continue;
    }
    if (remoteUrlHeadSuccess) {
      console.log('🔍 Found!', remoteUrl);
      return { filename, remoteUrl };
    }
  }
  console.log('❌ Could not find remotely!');
  return { filename: null, remoteUrl: null };
}

const TARGET_MEDIA_FILE_EXTENSIONS = {
  audio: new Set(['.mp3', '.wav']),
  video: new Set(['.mp4']),
};
function updateMediaMetadata(filename, storyID, metadata, linkedMediaPaths) {
  // Only call this function if the file contains timestamps.
  // I/P: filename, of the FLEx or ELAN file
  // I/P: storyId, the unique ID of this document
  // I/P: metadata, a json object formatted for use on the site
  // I/P: linkedMediaPaths, a list of media file paths mentioned in the FLEx or ELAN file 
  // O/P: updates metadata by filling in any missing audio/video file names, if we can,
  //  and setting timed=false if we can't find any audio/video files
  
  metadata['timed'] = true;

  const audioFile = metadata['media']['audio'];
  let hasWorkingAudio = verifyMedia(audioFile);
  if (!hasWorkingAudio) {
    metadata['media']['audio'] = "";
  }
  const videoFile = metadata['media']['video'];
  let hasWorkingVideo = verifyMedia(videoFile);
  if (!hasWorkingVideo) {
    metadata['media']['video'] = "";
  }

  // If both audio/video work, then we're done. Otherwise, figure out what we need.
  if (hasWorkingAudio && hasWorkingVideo) {
    return;
  }
  const audioFiles = [];
  const videoFiles = [];
  for (const mediaPath of linkedMediaPaths) {
    const mediaFilename = getFilenameFromPath(mediaPath);
    const fileExtension = mediaFilename.substring(mediaFilename.lastIndexOf('.')).toLowerCase();
    if (TARGET_MEDIA_FILE_EXTENSIONS.audio.has(fileExtension)) {
      audioFiles.push(mediaFilename);
    } else if (TARGET_MEDIA_FILE_EXTENSIONS.video.has(fileExtension)) {
      videoFiles.push(mediaFilename);
    }
  }
  
  // Media search
  if (!hasWorkingAudio) {
    const audioFile = mediaSearch(filename, "audio", audioFiles, TARGET_MEDIA_FILE_EXTENSIONS.audio);
    if (audioFile != null) {
      hasWorkingAudio = true;
      metadata['media']['audio'] = audioFile;
    }
  }
  if (!hasWorkingVideo) {
    const videoFile = mediaSearch(filename, "video", videoFiles, TARGET_MEDIA_FILE_EXTENSIONS.video);
    if (videoFile != null) {
      hasWorkingVideo = true;
      metadata['media']['video'] = videoFile;
    }
  }
  
  // Worst case scenario: no media
  if (!hasWorkingAudio && !hasWorkingVideo) {
    metadata['timed'] = false;
    console.log("❌  ERROR: " + filename + " (unique ID: " + storyID + ") has no linked audio or video in the media_files directory. It will be processed as an untimed file and no audio, video, or time alignment will be displayed on the site.");
  }
}

function getTitleFromFilename(filename) {
  return filename.substring(0, filename.lastIndexOf('.'));
}

function improveFLExIndexData(path, storyID, itext) {
  // I/P: path, a string
  //      itext, an interlinear text, e.g., jsonIn["document"]["interlinear-text"][0]
  // O/P: a JSON object, based on the index.json file and new metadata
  // Status: untested
  let metadata = getMetadataFromIndex(storyID);

  const date = new Date();
  const prettyDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
  
  const hasTimestamps = flexUtils.documentHasTimestamps(itext);
  
  // get title/source info, part 1
  let titlesAndSources = itext["item"];
  let titles = {};
  let sources = {};
  if (titlesAndSources != null) {
    for (const current_title of titlesAndSources) {
      if (current_title['$']['type'] === 'title') {
        titles[(current_title["$"]["lang"])] = current_title["_"];
      } else if (current_title['$']['type'] === 'source') {
        sources[(current_title["$"]["lang"])] = current_title["_"];
      }
    }
  }
  
  if (metadata == null) { // file not in index previously
  
    let defaultTitle = getTitleFromFilename(getFilenameFromPath(path));
    // console.log(32332, path, defaultTitle);
    // Uncomment the three lines below to use a particular language title 
    // (in this case "es", Spanish) as the main title for newly added documents. 
    // if (titles["es"] != null && titles["es"] != "") {
      // defaultTitle = titles["es"];
    // }
  
    // below is the starter data:
    metadata = {
      "timed": hasTimestamps,
      "story ID": storyID,
      "title": {
        "_default": defaultTitle,
      },
      "media": {
        "audio": "",
        "video": ""
      },
      "languages": [],
      "date_created": "",
      "date_uploaded": prettyDate,
      "source": {
        "_default": ""
      },
      "description": "",
      "genre": "",
      "author": "",
      "glosser": "",
      "speakers": [],
      "xml_file_name": path,
      "source_filetype": "FLEx"
    }
  }
  
  // get title/source info, part 2
  titles["_default"] = metadata["title"]["_default"];
  sources["_default"] = metadata["source"]["_default"];
  metadata["title"] = titles;
  metadata["source"] = sources;
  
  // get language info
  let languages = [];
  let itextLanguages = itext.languages;
  if (itextLanguages != null) { // null on .flextext freshly exported from ELAN
    const languageData = itextLanguages[0].language;
    for (const language of languageData) {
      languages.push(language["$"]["lang"]);
    }
  }
  metadata["languages"] = languages;
  
  // fill in any missing audio/video files, if we can
  const linkedMediaPaths = getFlexMediaFilenames(itext);
  const filename = getFilenameFromPath(path);
  if (hasTimestamps) {
    updateMediaMetadata(filename, storyID, metadata, linkedMediaPaths);
  }
  
  return metadata;
}

function improveElanIndexData(path, storyID, adoc) {
  // I/P: path, a string
  //      storyID, a string
  //      adoc, an annotation document
  // O/P: a JSON object, based on the index.json file and new metadata
  // Status: untested
  const filename = getFilenameFromPath(path);
  let metadata = getMetadataFromIndex(storyID);

  const date = new Date();
  const prettyDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();

  if (metadata == null) { // file not in index previously
    // below is the starter data:
    metadata = {
      "timed": true,
      "story ID": storyID,
      "title": {
        "_default": getTitleFromFilename(filename),
      },
      "media": {
        "audio": "",
        "video": ""
      },
      "languages": [],
      "date_created": "",
      "date_uploaded": prettyDate,
      "source": {
        "_default": ""
      },
      "description": "",
      "genre": "",
      "author": "",
      "glosser": "",
      "speakers": [],
      "xml_file_name": path,
      "source_filetype": "ELAN"
    };
  }

  // get language info
  let speakers = new Set(); // to avoid duplicates
  const tiers = adoc['TIER'];
  for (const tier of tiers) {
    if (tier['$']['PARTICIPANT']) {
      speakers.add(tier['$']['PARTICIPANT']);
    }
  }
  metadata['speakers'] = Array.from(speakers);

  // fill in any missing audio/video files, if we can
  let linkedMediaPaths = [];
  let mediaDescriptors = adoc['HEADER'][0]['MEDIA_DESCRIPTOR'];
  if (mediaDescriptors != null) { // null happens on ELAN->FLEx->ELAN files
    for (const mediaDesc of mediaDescriptors) {
      linkedMediaPaths.push(mediaDesc['$']['MEDIA_URL']);
    }
  }
  updateMediaMetadata(filename, storyID, metadata, linkedMediaPaths)

  return metadata;
}

module.exports = {
  verifyMedia: verifyMedia,
  getMetadataFromIndex: getMetadataFromIndex,
  getFilenameFromPath: getFilenameFromPath,
  improveFLExIndexData: improveFLExIndexData,
  improveElanIndexData: improveElanIndexData
};
