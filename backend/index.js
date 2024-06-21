import cors from "cors";

import express from "express";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;
const Cors_Origin = process.env.CORS_ORIGIN;

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: Cors_Origin ? Cors_Origin.split(',') : [],
    methods: ["GET", "POST", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Connect to MongoDB
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// Routes

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.json({
    message: "Hello From Node API",
    CORS_ORIGIN: process.env.CORS_ORIGIN
  });
});
app.use("/products", productRoutes);

export default app;
