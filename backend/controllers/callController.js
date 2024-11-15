const Call = require('../models/Call');

// Get all calls
exports.getCalls = async (req, res) => {
  const calls = await Call.find();
  res.json(calls);
};

// Create a new call
exports.createCall = async (req, res) => {
  const { leadId, userId, callDuration, callOutcome, callNotes, callType } = req.body;
  const newCall = new Call({ leadId, userId, callDuration, callOutcome, callNotes, callType });
  await newCall.save();
  res.json(newCall);
};
