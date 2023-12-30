const express = require('express');
const productController = require('../controller/product.controller');
const fetchUser = require('../middleware/userValidate');

const router = express.Router();

router.post('/products', fetchUser, productController.addProduct);
router.get('/products', fetchUser, productController.getAllProducts);
router.put('/product/:id', fetchUser, productController.updateProduct);
router.delete('/product/:id', fetchUser, productController.deleteProduct);
router.get('/product/feature', fetchUser, productController.getFeaturedProducts);
router.get('/product/price/:value', fetchUser, productController.getProductsByPrice);
router.get('/product/rating/:value', fetchUser, productController.getProductsByRating);

module.exports = router;
