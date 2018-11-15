console.log("Starting notes.js");

const fs = require("fs");

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  console.log("Getting all notes");
};

var getNote = title => {
  console.log("Getting note", title);
};

var removeNote = title => {
  console.log("Remove note", title);
};

var fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync("notes.json"));
  } catch (e) {
    return [];
  }
};

var saveNotes = object => {
  fs.writeFileSync("notes.json", JSON.stringify(object));
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
