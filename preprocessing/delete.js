const fs = require("fs");
const inquirer = require("inquirer");
let obj = JSON.parse(fs.readFileSync("data/index.json", "utf8"));

let filename;

let maxArgIndex = 0;
process.argv.forEach(function (val, index, array) {
	maxArgIndex = index;
	if (index === 2) {
		filename = val;
	}
});
if (maxArgIndex !== 2) {
	console.log("Wrong number of arguments! To delete a file, type: \n $ node preprocessing/delete.js storyID \nwhere the storyID can be found in the URL or index.json file.");
} else {
	main();
}

async function main() {
	try {
		await inquirer.prompt({
			name: "confirm",
			type: "confirm",
			message: "Are you sure?"
		}).then(function (answers) {
			if (answers.confirm) {
				return Promise.resolve();
			} else {
				return Promise.reject("Canceled.");
			}
		});

		if (obj[filename] == null) {
			throw "Does not exist";
		}

		// Get associated media:
		media = obj[filename]["media"]
		if (media.hasOwnProperty('audio') && media['audio'] !== '') {
			console.log(`Found audio file ${media['audio']}; please remove manually`);
		}
		if (media.hasOwnProperty('video') && media['video'] !== '') {
			console.log(`Found video file ${media['video']}; please remove manually`);
		}
		// deleting media is not supported right now because generally is hosted remoted, not locally

		/*
		audio_filename = "";
		video_filename = "";
		// Get associated media:
		media = obj[filename]["media"]
		if (media.hasOwnProperty('audio') && media['audio'] !== '') {
			audio_filename = "data/media_files/" + media['audio'];
		}
		if (media.hasOwnProperty('video') && media['video'] !== '') {
			video_filename = "data/media_files/" + media['video'];
		}
		
		///////////////////////////////////
		// Ask to delete video/audio files:
		///////////////////////////////////
		/*
		inquirer.prompt([
			// mp3
			{
				"type": "confirm",
				"name": "delete_audio",
				"message": "Found matching audio file: " + media['audio'] + ". Do you want to delete this file? If this audio file is used by other FLEx/ELAN files, it will be deleted there, too.",
				"default": false,
				"when": function (answers) {
					if (audio_filename !== "") {
						return true;
					} else {
						return false;
					}
				}
			},
			{
				"type": "confirm",
				"name": "delete_video",
				"message": "Found matching video file: " + media['video'] + ". Do you want to delete this file? If this video file is used by other FLEx/ELAN files, it will be deleted there, too.",
				"default": false,
				"when": function (answers) {
					if (video_filename !== "") {
						return true;
					} else {
						return false;
					}
				}
			}
		]).then(function (answers) {
			if (answers["delete_audio"]) {
				fs.unlink(audio_filename, function () {});
			}
			if (answers["delete_video"]) {
				fs.unlink(video_filename, function () {});
			}
		});
		///////////////////////////////////
		// End inquirer
		///////////////////////////////////
		*/

		// Get original XML filename:
		xmlFileName = obj[filename]["xml_file_name"]
		if (obj[filename]["source_filetype"] === "ELAN") {
			fs.unlink("data/elan_files/" + xmlFileName, function () {});

			// delete .pfsx file too (if it doesn't exist, this does nothing)
			fs.unlink("data/elan_files/" + xmlFileName.slice(0, -4) + ".pfsx", function () {});
		} else if (obj[filename]["source_filetype"] === "FLEx") {
			fs.unlink("data/flex_files/" + xmlFileName, function () {});
		} else {
			console.log("Unsure of filetype. Unable to delete original XML file.")
		}

		// Removes the index:
		delete obj[filename];

		// Deletes the JSON file
		json_path = "data/json_files/" + filename + ".json";
		fs.unlink(json_path, function () {});

		fs.writeFileSync("data/index.json", JSON.stringify(obj, null, 2));
		console.log("✅" + "  " + "File successfully deleted!");
		console.log("\nYou've successfully deleted this file. However, this will be displayed on the site until you rebuild the databases and site. (You can do both using the \"quick-build-online\" or \"quick-build-offline\" npm script; for more info: https://github.com/BrownCLPS/LingView/wiki)");
	} catch (err) {
		console.log(err);
		console.log("❌" + "  " + "Deletion failed.");
	}
}