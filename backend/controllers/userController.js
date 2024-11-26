// backend/controllers/userController.js
const User = require('../models/User');
// Function to create a new user
const createUser = async (req, res) => {
  try {
    const { userId, name, email, role, username, password } = req.body;

    const newUser = new User({
      userId,
      name,
      email,
      role,
      username,
      password
    });

    // Save the new user to the database
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
};
userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

module.exports = { createUser };
