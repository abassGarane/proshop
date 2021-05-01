const express = require('express');
const products = require('./data/products');
const app = express();

app.get('/api/products', (req, res) => {
  res.status(200).json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});
app.get('/', (req, res) => {
  res.send('API is running');
});

app.listen(5000, () => {
  console.log('listening on port 5000');
});
