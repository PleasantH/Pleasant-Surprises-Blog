const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false); // Disable strict query mode
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`Database connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection failed:', error);
  }
}

module.exports = connectDB;