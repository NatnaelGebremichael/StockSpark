import cors from "cors";

import express from "express";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;
const corsOrigins = [
  "https://stock-spark.vercel.app",
  "https://stock-spark-git-dev-natnael92460s-projects.vercel.app",
];

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: function (origin, callback) {
      console.log("Request origin:", origin); // For debugging
      if (!origin || corsOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        console.log("Origin not allowed by CORS:", origin); // For debugging
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PATCH"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "X-Vercel-Protection-Bypass",
    ],
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
    CORS_ORIGIN: process.env.CORS_ORIGIN,
  });
});
app.use("/products", productRoutes);

export default app;
