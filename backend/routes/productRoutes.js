import express from 'express';

const router = express.Router();
import {
  getProducts,
  getProductById,
} from '../controllers/productController.js';
router.route('/').get(getProducts);

//@desc Fetch a Single products
// @route  GET/api/products/:id
//@access Public

router.route('/:id').get(getProductById);
export default router;
