// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const session = require('express-session');
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
// app.use(cors());
app.use(cors({
  origin: "http://localhost:5000/",  // Replace with the actual origin of your frontend
  credentials: true,  // Allow credentials (cookies, authorization headers, etc.)
}));

app.use(bodyParser.json());
app.use(session({ secret: 'your_secret', resave: false, saveUninitialized: true }));
// Import routes
const userRoutes = require('./routes/userRoutes');
const leadRoutes = require('./routes/leadRoutes');
const callRoutes = require('./routes/callRoutes');
const taskRoutes = require('./routes/taskRoutes');


// Use routes
app.use('/api/users', userRoutes);
app.use('/api/leads', leadRoutes);
app.use('/api/calls', callRoutes);
app.use('/api/tasks', taskRoutes);

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
