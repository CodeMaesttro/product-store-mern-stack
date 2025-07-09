// Import required libraries
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Import Product model
import Product from './config/models/product.model.js';
import productRouter from './routes/product.route.js';

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies

app.use('api/products', productRouter); // Use product routes

// ==================== SERVER START ====================

const PORT = process.env.PORT || 3000;

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection failed:', err);
  });
