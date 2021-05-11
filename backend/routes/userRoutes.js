import express from 'express';
import { protect } from '../middleware/authMIddleware.js';
import {
  authUser,
  registerUser,
  getUserProfile,
} from '../controllers/userControler.js';

const router = express.Router();
router.route('/').post(registerUser);
router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile);
export default router;
