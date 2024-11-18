const mongoose = require('mongoose');

// Define Lead Schema
const leadSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },
    alternatePhone: { type: String },
    acquired: { type: Date, default: Date.now }
});

// Create and export the Lead model
const Lead = mongoose.model('Lead', leadSchema);
module.exports = Lead;
