const express = require('express');
const taskController = require('../controllers/taskController');
const router = express.Router();

router.get('/', taskController.getTasks);
router.post('/', taskController.createTask); 
router.get('/:leadId',taskController.byLeads);
router.post('/', taskController.createTaskForLead);
module.exports = router;
