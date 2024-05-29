import cors from 'cors'

import express from 'express';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({
    origin: 'https://stock-spark.vercel.app/', //'http://localhost:5000/',
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

