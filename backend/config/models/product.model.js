// Import mongoose
import mongoose from "mongoose";

// Define the product schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
    default: 0,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
    default: 0,
  },
}, {
  timestamps: true, // Automatically manage createdAt and updatedAt fields
});

// Export the product model
const Product = mongoose.model("Product", productSchema);
export default Product;
