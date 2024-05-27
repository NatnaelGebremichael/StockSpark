import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Product from '../models/product.js'; // Import the product schema

dotenv.config();
const encodedUsername = encodeURIComponent(process.env.rawUsername);
const encodedPassword = encodeURIComponent(process.env.rawPassword);
const uri = `mongodb+srv://${encodedUsername}:${encodedPassword}@${process.env.clusterUrl}/${process.env.db}?retryWrites=true&w=majority&appName=StockSparkDBDev`;

// MongoDB connection setup
mongoose
    .connect(uri)
    .then(() =>
        console.log("MongoDB database connection established successfully")
    )
    .catch((err) => console.error("Could not connect to MongoDB...", err));



// Sample initial product data
const initialProducts = [
    {
        name: 'Banana',
        price: 0.99,
        quantity: 100,
        category: 'Fruits',
    },
    {
        name: 'Milk',
        price: 2.49,
        quantity: 50,
        category: 'Dairy',
    },
    {
        name: 'Bread',
        price: 1.99,
        quantity: 75,
        category: 'Bakery',
    },
];

// Function to seed initial products
const seedProducts = async () => {
    try {
        await Product.deleteMany(); // Clear existing products

        await Product.insertMany(initialProducts); // Insert initial products

        console.log('Initial products seeded successfully.');
    } catch (error) {
        console.error('Error seeding initial products:', error);
    } finally {
        mongoose.connection.close(); // Close the MongoDB connection
    }
};

seedProducts();