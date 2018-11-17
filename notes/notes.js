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
  return fetchNotes();
};

var getNote = title => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter(note => note.title === title);
  return filteredNotes[0];
};

var removeNote = title => {
  var notes = fetchNotes();
  var new_notes = notes.filter(note => note.title !== title);
  saveNotes(new_notes);

  return notes.length !== new_notes.length;
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

var logNote = note => {
  console.log("---");
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
