// backend/routes/userRoutes.js
const express = require('express');
const { signUp, login } = require('../controllers/userController');  // Import the functions
const router = express.Router();

// POST route for signup
router.post('/signup', signUp);

// POST route for login
router.post('/login', login);

module.exports = router;
