// backend/routes/productRoutes.js
import { Router } from "express";
import {
  getProducts,
  createProduct,
  updateProductQuantity,
} from "../controllers/productController.js";
import authMiddleware from "../authMiddleware.js";

const router = Router();

// Add this general OPTIONS handler
router.options('*', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://stock-spark-git-dev-natnael92460s-projects.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Vercel-Protection-Bypass');
  res.sendStatus(200);
});

router.get("/", authMiddleware, getProducts); // ROUTE TO GET all products
router.post("/", authMiddleware, createProduct); // ROUTE TO CREATE NEW PRODUCT
router.patch("/:id/quantity", authMiddleware, updateProductQuantity); // ROUTE TO UPDATE PRODUCT QUANTITY

// router.options("/:id/quantity", (req, res) => {
//   res.setHeader("Access-Control-Allow-Methods", "PATCH");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   res.sendStatus(200);
// });

export default router;
