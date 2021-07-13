const express = require('express');
const router = express.Router();
const { getAllProducts, getProduct, searchProduct } = require('../controller/productControllers');

router.get('/search', searchProduct);

router.get('/', getAllProducts);

router.get('/:id', getProduct);

module.exports = router;