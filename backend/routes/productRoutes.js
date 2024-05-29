// backend/routes/productRoutes.js
import { Router } from 'express';
import { getProducts, createProduct } from '../controllers/productController.js';
import authMiddleware from '../authMiddleware.js'

const router = Router();


router.get('/', authMiddleware, getProducts); // ROUTE TO GET all products
router.post('/', authMiddleware, createProduct); // ROUTE TO CREATE NEW PRODUCT

export default router;