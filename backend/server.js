// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const path = require('path');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Import routes
const userRoutes = require('./routes/userRoutes');
const leadRoutes = require('./routes/leadRoutes');

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/leads', leadRoutes);

// Default route for the root
app.get('/', (req, res) => {
  res.send('Welcome to TeleCRM API');
});

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, '../frontend')));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
