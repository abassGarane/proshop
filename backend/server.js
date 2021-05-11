import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMIddleware.js';
const app = express();
app.use(express.json());
dotenv.config();
connectDB();

app.get('/', (req, res) => {
  res.send('API is running');
});
//Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT} in ${process.env.NODE_ENV}`);
});
