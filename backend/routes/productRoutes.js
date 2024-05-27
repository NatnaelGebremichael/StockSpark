// backend/routes/productRoutes.js
import { Router } from 'express';
import { getProducts, createProduct } from '../controllers/productController.js';

const router = Router();


router.get('/', getProducts); // ROUTE TO GET all products
router.post('/', createProduct); // ROUTE TO CREATE NEW PRODUCT

export default router;