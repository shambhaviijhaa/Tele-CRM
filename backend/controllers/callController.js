const Call = require('../models/Call');

// Get all calls
exports.getCalls = async (req, res) => {
  try {
    const calls = await Call.find().populate('leadId userId');
    res.json(calls);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching calls', error });
  }
};

// Create a new call
exports.createCall = async (req, res) => {
  try {
    const { leadId, userId, callDuration, callOutcome, callNotes, callType } = req.body;
    const newCall = new Call({ leadId, userId, callDuration, callOutcome, callNotes, callType });
    await newCall.save();
    res.status(201).json(newCall);
  } catch (error) {
    res.status(400).json({ message: 'Error creating call', error });
  }
};
