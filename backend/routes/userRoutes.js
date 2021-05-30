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
// @access:
// private
// @route:
// GET/api/users/profile
// @desc:
// Get user profile
router.route('/profile').get(protect, getUserProfile);
export default router;
