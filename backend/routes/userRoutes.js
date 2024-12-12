// backend/routes/userRoutes.js
const express = require('express');
const { signUp, login } = require('../controllers/userController');  // Import the functions
const router = express.Router();

// POST route for signup
router.post('/signup', signUp);

// POST route for login
router.post('/login', login);

router.post('/logout', (req, res) => {
    console.log("Logout endpoint hit");
    req.session.destroy((err) => {
        if (err) {
            console.error("Error logging out:", err);
            return res.status(500).json({ error: "Logout failed" });
        }
        res.clearCookie("sessionId");
        res.status(200).json({ message: "Logged out successfully" });
    });
});


module.exports = router;
