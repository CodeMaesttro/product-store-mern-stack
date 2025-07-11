import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config(); // Load environment variables

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI); // No extra options needed

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    process.exit(1); // Exit on failure
  }
};

export default connectDB;
