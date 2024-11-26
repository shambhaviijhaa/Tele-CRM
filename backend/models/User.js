const mongoose = require('mongoose');
const bcrypt = require('bcrypt');  // For password hashing

// Define the user schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['admin', 'manager', 'caller'], required: true },
  username: { type: String, required: true, unique: true },  // Username field
  password: { type: String, required: true }  // Password field (to be hashed)
});

// Pre-save middleware to hash the password before saving it
userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);  // Hash password with salt rounds = 10
  }
  next();
});

// Model creation
const User = mongoose.model('User', userSchema);

module.exports = User;
