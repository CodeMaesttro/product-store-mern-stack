// Import mongoose
import mongoose from "mongoose";

// Define the Product schema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // Removes whitespace from both ends
      maxlength: 50, // Optional: limit name length
    },
    price: {
      type: Number,
      required: true,
      min: 0, // Ensure price can't be negative
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    imageUrl: {
      type: String,
      required: true,
      trim: true,
    },
    stock: {
      type: Number,
      required: true,
      min: 0, // Ensure no negative stock
      default: 0,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

// Create and export the Product model
const Product = mongoose.model("Product", productSchema);
export default Product;
