const express = require('express');
const productController = require('../controller/product.controller');

const router = express.Router();

router.post('/products', productController.addProduct);
router.get('/products', productController.getAllProducts);
router.put('/product/:id', productController.updateProduct);
router.delete('/product/:id', productController.deleteProduct);
router.get('/product/feature', productController.getFeaturedProducts);
router.get('/product/price/:value', productController.getProductsByPrice);
router.get('/product/rating/:value', productController.getProductsByRating);

module.exports = router;
