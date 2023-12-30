const express = require('express');
const productController = require('../controller/product.controller');

const router = express.Router();

router.post('/products', productController.addProduct);
router.get('/products', productController.getAllProducts);
router.patch('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);
router.get('/products/featured', productController.getFeaturedProducts);
router.get('/products/price/:value', productController.getProductsByPrice);
router.get('/products/rating/:value', productController.getProductsByRating);

module.exports = router;
