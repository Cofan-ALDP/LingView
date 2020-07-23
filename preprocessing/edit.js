const fs = require("fs");
const inquirer = require("inquirer"); // edited the node module for this
const indexObj = JSON.parse(fs.readFileSync("data/index.json", "utf8"));

let filename;
let data;

let maxArgIndex = 0;

process.argv.forEach(function (val, index, array) {
	maxArgIndex = index;
	if (index === 2) {
		filename = val;
	} else if (index === 3) {
		console.log("Too many arguments. Continuing anyway...");
	}
});

if (maxArgIndex < 2) {
	console.log("To edit the metadata for a file, type: \n node preprocess/edit.js unique_id\n where unique_id is the last part of a story's URL.");
} else {
	try {
		data = indexObj[filename];
		main(update);
		console.log("✅" + "  " + "File found! Preparing to edit...");
	} catch (err) {
		console.log("❌" + "  " + " File not found!  \nExiting...");
	}
}

function hasTimestamps(uniqueId) {
	return indexObj[uniqueId].timed === true;
	// if broken, try looking at the actual story...
	// ...
	// let firstSentence = story.sentences[0];
	// return firstSentence.start_time_ms != null;
}

function main(callback) {
	inquirer.prompt([{
			"type": "list",
			"name": "valueToEdit",
			"message": "What do you want to edit?",
			"choices": [
				"audio",
				"video",
				"title",
				"description",
				"genre",
				"author",
				"glosser",
				"date recorded",
				"source"
			]
		},
		// mp3
		{
			"type": "input",
			"name": "audio",
			"message": "Name of mp3 file:",
			"default": data["media"]["audio"],
			"when": function (answers) {
				const condition = hasTimestamps(filename) && answers.valueToEdit === "audio";
				return condition;
			},
			"validate": function (response) {
				const media_files = fs.readdirSync("data/media_files");
				if (media_files.indexOf(response) >= 0 || response === "") {
					return true;
				} else if (response === "blank") { // TODO: replace "blank" with "" in then()
					return true;
				} else {
					return "That file doesn't exist in your media_files directory! Please be aware that filenames are case-sensitive and require an extension. Type 'blank' to leave the file blank.";
				}
			}
		},
		// mp4
		{
			"type": "input",
			"name": "video",
			"message": "Name of mp4 file:",
			"default": data["media"]["video"],
			"when": function (answers) {
				const condition = hasTimestamps(filename) && answers.valueToEdit === "audio"
				return condition;
			},
			"validate": function (response) {
				const media_files = fs.readdirSync("data/media_files");
				if (media_files.indexOf(response) >= 0 || response === "") {
					return true;
				} else if (response === "blank") {
					return true;
				} else {
					return "That file doesn't exist in your media_files directory! Please be aware that filenames are case-sensitive and require an extension. Type 'blank' to leave the file blank.";
				}
			}
		},
		// edit title?
		{
			"type": "input",
			"name": "title",
			"message": "Title:",
			"default": data["title"]["_default"],
			"when": function (answers) {
				return answers.valueToEdit === "title"
			}
		},
		// edit description?
		{
			"type": "confirm",
			"name": "desc_edit",
			"message": "Edit description?",
			"default": false,
			"when": function (answers) {
				if (data["description"] && answers.valueToEdit === "description") {
					console.log("You've already entered a description: " + '"' + data["description"] + '"');
					return true;
				} else {
					return false;
				}
			}
		},
		// description editor (probably using Vim)
		{
			"type": "editor",
			"name": "description",
			"message": " ", // cannot be empty :(
			"default": data["description"],
			"when": function (answers) {
				return (answers["desc_edit"]);
			}
		},
		// description creator
		{
			"type": "input",
			"name": "description",
			"message": "Enter a description:",
			"when": function (answers) {
				return (data["description"] === "" && answers.valueToEdit === "description");
			}
		},
		// genre
		{
			"type": "list",
			"name": "genre",
			"message": "Select a genre:",
			"choices": ["Nonfiction", "Fiction", ""],
			"default": data["genre"],
			"when": function (answers) {
				return answers.valueToEdit === "genre"
			}
		},
		// author
		{
			"type": "input",
			"name": "author",
			"message": "Author:",
			"default": data["author"],
			"when": function (answers) {
				return answers.valueToEdit === "author"
			}
		},
		// glosser
		{
			"type": "input",
			"name": "glosser",
			"message": "Who glossed it:",
			"default": data["glosser"],
			"when": function (answers) {
				return answers.valueToEdit === "glosser"
			}
		},
		// date recorded
		{
			"type": "input",
			"name": "date_created",
			"message": "Date of creation (mm/dd/yyyy):",
			"default": data["date_created"],
			"when": function (answers) {
				return answers.valueToEdit === "date recorded"
			}
		},
		// source
		{
			"type": "input",
			"name": "source",
			"message": "Source:",
			"default": data["source"]["_default"],
			"when": function (answers) {
				return answers.valueToEdit === "source"
			}
		}
	]).then(function (answers) {
		if (answers["audio"] && answers["audio"] == "blank") {
			data["media"]["audio"] == "";
		} else if (answers["audio"]) {
			data["media"]["audio"] = answers["audio"];
		}
		if (answers["video"] && answers["video"] == "blank") {
			data["media"]["video"] == "";
		} else if (answers["video"]) {
			data["media"]["video"] = answers["video"];
		}
		data["timed"] = (data["media"]["audio"] != "") || (data["media"]["video"] != "");

		if (answers["description"]) {
			data["description"] = answers["description"];
		}

		if (answers["title"]) {
			data["title"]["_default"] = answers["title"]
		}

		if (answers["genre"]) {
			data["genre"] = answers["genre"]
		}

		if (answers["author"]) {
			data["author"] = answers["author"]
		}

		if (answers["glosser"]) {
			data["glosser"] = answers["glosser"]
		}

		if (answers["date_created"]) {
			data["date_created"] = answers["date_created"]
		}

		if (answers["source"]) {
			data["source"]["_default"] = answers["source"]
		}

		callback()
	})
}

function update() {
	fs.writeFileSync("data/index.json", JSON.stringify(indexObj, null, 2));
	console.log("📤" + "  " + "Metadata edit complete.");
	console.log("\nYou've successfully edited the metadata. However, this will not be displayed on the site until you rebuild the databases and site. (You can do both using the \"quick-build-online\" or \"quick-build-offline\" npm script; for more info: https://github.com/BrownCLPS/LingView/wiki)");
}
