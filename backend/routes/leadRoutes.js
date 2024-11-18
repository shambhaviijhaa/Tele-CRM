const express = require('express');
const router = express.Router();
const leadController = require('../controllers/leadController');

// Define the routes for Leads
router.get('/', leadController.getLeads);              // Get all leads
router.post('/', leadController.createLead);           // Create a new lead
router.get('/:id', leadController.getLeadById);        // Get a single lead by ID
router.put('/:id', leadController.updateLead);         // Update a lead by ID
router.delete('/:id', leadController.deleteLead);      // Delete a lead by ID

module.exports = router;
