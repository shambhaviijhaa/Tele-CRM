const mongoose = require('mongoose');

const callSchema = new mongoose.Schema({
  leadId: { type: mongoose.Schema.Types.ObjectId, ref: 'Lead', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  callDate: { type: Date, default: Date.now },
  callDuration: { type: Number, required: true },
  callOutcome: { type: String, required: true },
  callNotes: { type: String },
  callType: { type: String, enum: ['Initial Call', 'Follow-Up', 'Cold Call'], required: true },
});

module.exports = mongoose.model('Call', callSchema);
