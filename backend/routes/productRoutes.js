// backend/routes/productRoutes.js
import { Router } from 'express';
import { getProducts } from '../controllers/productController';

const router = Router();

// Routes
// Example: GET all products
router.get('/', getProducts);

export default router;