const Lead = require('../models/Lead');

// Get all leads
exports.getLeads = async (req, res) => {
    try {
        const leads = await Lead.find();
        res.json(leads);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new lead
exports.createLead = async (req, res) => {
    const { name, phone, email, alternatePhone, acquired } = req.body;
    const newLead = new Lead({
        name,
        phone,
        email,
        alternatePhone,
        acquired: new Date(acquired),
    });
    
    try {
        const savedLead = await newLead.save();
        res.status(201).json(savedLead);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get a single lead by ID
exports.getLeadById = async (req, res) => {
    try {
        const lead = await Lead.findById(req.params.id);
        if (!lead) return res.status(404).json({ message: "Lead not found" });
        res.json(lead);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a lead
exports.updateLead = async (req, res) => {
    try {
        const updatedLead = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedLead) return res.status(404).json({ message: "Lead not found" });
        res.json(updatedLead);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a lead
exports.deleteLead = async (req, res) => {
    try {
        const lead = await Lead.findByIdAndDelete(req.params.id);
        if (!lead) return res.status(404).json({ message: "Lead not found" });
        res.json({ message: "Lead deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
