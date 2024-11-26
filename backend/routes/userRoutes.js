// backend/routes/userRoutes.js
const express = require('express');
const { createUser } = require('../controllers/userController');  // Import the function
const router = express.Router();

// POST route to create a new user
router.post('/create-user', createUser);

module.exports = router;
