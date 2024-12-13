const express = require('express');
const { getNotes, createNote } = require('../controllers/noteController');
const router = express.Router();

router.get('/', getNotes);
router.post('/', createNote);
const Note = require('../models/Note');

// Route to add a note for a user
router.post('/', async (req, res) => {
    try {
        const { userId, noteText } = req.body;

        if (!userId || !noteText) {
            return res.status(400).json({ error: 'UserId and noteText are required' });
        }

        const newNote = new Note({
            userId,
            noteText,
        });

        await newNote.save();
        res.status(201).json(newNote);
    } catch (error) {
        console.error('Error creating note:', error);
        res.status(500).json({ error: 'Failed to create note' });
    }
});

// Route to fetch notes for a specific user
router.get('/:userId', async (req, res) => {
    try {
        const { userId } = req.params;

        const notes = await Note.find({ userId })
            .populate('userId', 'name') // Populate userName
            .sort({ createdAt: -1 }); // Sort by createdAt, newest first

        res.json(notes);
    } catch (error) {
        console.error('Error fetching notes:', error);
        res.status(500).json({ error: 'Failed to fetch notes' });
    }
});

module.exports = router;