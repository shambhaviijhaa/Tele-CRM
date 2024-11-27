// backend/controllers/userController.js
const User = require('../models/User');
const bcrypt = require('bcrypt');  // Add bcrypt for password hashing
const jwt = require('jsonwebtoken');  // Add jwt for token generation

// Sign-up controller logic
const signUp = async (req, res) => {
  try {
    const { username, name, email, role, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send('User already exists');
    }

    // Create a new user
    const newUser = new User({ username, name, email, role, password });

    // Save the user to the database
    await newUser.save();
    res.status(201).send('User registered successfully');
  } catch (error) {
    res.status(500).send('Error registering user: ' + error.message);
  }
};

// Login controller logic
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).send('Invalid credentials');
    }

    // Check if the provided password matches the stored password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send('Invalid credentials');
    }

    // Generate a JWT token if login is successful
    const token = jwt.sign({ userId: user._id }, 'secretKey');  // Use a proper secret key in production
    res.json({ token });
  } catch (error) {
    res.status(500).send('Error logging in: ' + error.message);
  }
};

module.exports = { signUp, login };
