// Import the dotenv dep to load environment variables
import dotenv from "dotenv";
dotenv.config();

// Import express
import express from "express";
import ProductModel from "./models/product.model.js";
import connectDB from "./config/db.js";
import productRouter from "./routes/product.route.js";
import cors from 'cors';

// ✅ CONNECT TO MONGODB
connectDB(); // ← You were missing this line!

// Get the express app instance
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors("*")); // CORS config

app.use('/api/products', productRouter);

// Root route
app.get("/", (req, res) => {
  res.send("Hello from the backend server!");
});

const PORT = process.env.PORT;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//oC9V2TSrdJJ6hhwU
//mongodb+srv://malbakamil0087_db_user:oC9V2TSrdJJ6hhwU@cluster0.ra92mn1.mongodb.net/
