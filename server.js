//  Load the .env file
require('dotenv').config();

// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//  Create Express App
const app = express();

// Middleware
app.use(express.json());  // Accept JSON data
app.use(cors());          // Allow frontend requests (CORS)

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log(' MongoDB Connected Successfully'))
  .catch(err => console.log(' MongoDB Error:', err));

// Import Routes
const authRoutes = require('./routes/authRoutes');  // Your auth routes
app.use('/api', authRoutes);  // Route prefix /api

// Start the Server
const PORT = process.env.PORT || 5000;  // Use PORT from .env, fallback to 4000
app.listen(PORT, () => {
  console.log('Server running on port ${PORT}');
});