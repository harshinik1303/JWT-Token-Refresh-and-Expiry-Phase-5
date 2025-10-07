// 1️⃣ Load the .env file
require('dotenv').config();

// 2️⃣ Dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// 3️⃣ Create Express App
const app = express();

// 4️⃣ Middleware
app.use(express.json());  // Accept JSON data
app.use(cors());          // Allow frontend requests (CORS)

// 5️⃣ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log(' MongoDB Connected Successfully'))
  .catch(err => console.log(' MongoDB Error:', err));

// 6️⃣ Import Routes
const authRoutes = require('./routes/authRoutes');  // Your auth routes
app.use('/api', authRoutes);  // Route prefix /api

// 7️⃣ Start the Server
const PORT = process.env.PORT || 5000;  // Use PORT from .env, fallback to 4000
app.listen(PORT, () => {
  console.log('Server running on port ${PORT}');
});