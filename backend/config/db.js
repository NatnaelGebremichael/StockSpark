import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const encodedUsername = encodeURIComponent(process.env.rawUsername);
const encodedPassword = encodeURIComponent(process.env.rawPassword);
const uri = `mongodb+srv://${encodedUsername}:${encodedPassword}@${process.env.clusterUrl}/${process.env.db}?retryWrites=true&w=majority&appName=StockSparkDBDev`;

const connectDB = async () => {
    try {
        await mongoose.connect(uri)
        console.log("MongoDB database connection established successfully")
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
