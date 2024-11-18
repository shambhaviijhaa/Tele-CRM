const Note = require('../models/Note');

// Get all notes
exports.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

// Create a new note
exports.createNote = async (req, res) => {
  const { leadId, userId, noteText } = req.body;
  const newNote = new Note({ leadId, userId, noteText });
  await newNote.save();
  res.json(newNote);
};
