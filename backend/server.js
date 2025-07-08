import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Product from './config/models/product.model.js';

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello from the backend server!');
});

app.get('/api/products', async (req, res) => {
  try{
    await connectDB();
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal server error" });
  }

  
});


app.get('/api/products/:id', async (req, res) => {
const { id } = req.params;
  try{
    await connectDB();
    const product = await ProductModel.findByID(id);
    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal server error" });
  }

  
});

app.post("/api/products", async (req, res) => {
  const { name, price, description, imageUrl, stock } = req.body;

  try {
    if (!name || !price || !description || !imageUrl) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const productData = {
      name,
      price,
      description,
      imageUrl,
      stock
    };

    const product = new Product(productData);
    await product.save();

    res.status(201).json({
      message: "Product created successfully",
      product,
    });

  } catch (error) {
    console.error("Error creating product:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});


const PORT = process.env.PORT || 3000;

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
