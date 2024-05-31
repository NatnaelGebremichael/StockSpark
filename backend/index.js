import cors from 'cors'

import express from 'express';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// For Dev http://localhost:5173 (or current port)
app.use(express.json());
app.use(cors({
    origin: "https://stock-spark.vercel.app",
}));

// Connect to MongoDB 
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// Routes

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send("Hello From Node API")
})
app.use('/products', productRoutes)
app.use('/products', productRoutes)

export default app;

