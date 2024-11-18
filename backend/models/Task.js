const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  leadId: { type: mongoose.Schema.Types.ObjectId, ref: 'Lead', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['New', 'In Progress', 'Converted'], required: true },
  outcome: { type: String },
  note: { type: String },
  dueDate: { type: Date, required: true },
  priority: { type: String, enum: ['High', 'Medium', 'Low'], required: true },
});

module.exports = mongoose.model('Task', taskSchema);
