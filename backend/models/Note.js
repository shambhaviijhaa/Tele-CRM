const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  leadId: { type: mongoose.Schema.Types.ObjectId, ref: 'Lead', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  noteText: { type: String, required: true, minlength: 1, maxlength: 500 },  // Max length for notes
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
}, { timestamps: true }); // Automatically track createdAt and updatedAt

// Hook to update `updatedAt` field when the note text is changed
noteSchema.pre('save', function(next) {
  if (this.isModified('noteText')) {
    this.updatedAt = Date.now();
  }
  next();
});

module.exports = mongoose.model('Note', noteSchema);
