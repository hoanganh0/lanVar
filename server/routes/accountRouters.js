const express = require('express');
const router = express.Router();
const {SignUp, SignIn, CreateOrders, GetOrders} = require('../controller/accountControllers');

router.get('/signUp', SignUp);
router.get('/signIn', SignIn);
router.post('/orders', CreateOrders);
router.get('/orders', GetOrders);

module.exports = router;