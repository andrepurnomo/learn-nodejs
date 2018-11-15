console.log("Starting app.js");

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes");

const argv = yargs.argv;
var command = argv._[0];

if (command === "add") {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("Note created");
    console.log("---");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  } else {
    console.log("Note title taken");
  }
} else if (command === "list") {
  notes.getAll();
} else if (command === "read") {
  notes.getNote(yargs.title);
} else if (command === "remove") {
  notes.removeNote(yargs.title);
} else {
  console.log("Command not recognize");
}
