import express from 'express';
import connectDB from './config/db';
import productRoutes from './routes/productRoutes';

// Connect to MongoDB 
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('api/products', productRoutes)

export default app;

