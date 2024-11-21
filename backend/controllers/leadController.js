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
// Controller function to handle Excel upload and store in Leads collection
exports.uploadLeadsFromExcel = async (req, res) => {
    const leadsData = req.body;  // The parsed Excel data will be here

    // Iterate over each record and transform it into the required Lead format
    const formattedLeads = leadsData.map(lead => ({
        name: lead.NAME || '',  // Use the correct key from the Excel columns
        phone: lead.PHONE || '',
        email: lead.EMAIL || '',
        alternatePhone: lead['ALTERNATE PHONE'] || '',
        acquired: lead.ACQUIRED ? new Date(lead.ACQUIRED) : new Date(),  // Format date if available
    }));

    try {
        // Insert all leads into the Leads collection
        await Lead.insertMany(formattedLeads);
        res.status(201).json({ message: 'Leads added successfully!' });
    } catch (error) {
        res.status(400).json({ message: 'Error adding leads from Excel.', error });
    }
};
