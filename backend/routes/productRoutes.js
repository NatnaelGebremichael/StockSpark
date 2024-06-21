// backend/routes/productRoutes.js
import { Router } from "express";
import cors from "cors";
import {
  getProducts,
  createProduct,
  updateProductQuantity,
} from "../controllers/productController.js";
import authMiddleware from "../authMiddleware.js";

const router = Router();

// CORS configuration
const corsOptions = {
  origin: ['https://stock-spark.vercel.app', 'https://stock-spark-lfdk.vercel.app'],
  methods: ['GET', 'POST', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

// Apply CORS to all routes
router.use(cors(corsOptions));

// Pre-flight requests
router.options('*', cors(corsOptions));

router.get("/", authMiddleware, getProducts); // ROUTE TO GET all products
router.post("/", authMiddleware, createProduct); // ROUTE TO CREATE NEW PRODUCT
router.patch("/:id/quantity", authMiddleware, updateProductQuantity); // ROUTE TO UPDATE PRODUCT QUANTITY


export default router;
