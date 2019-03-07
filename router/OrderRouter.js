const express = require('express');
const router = express.Router();
const Order = require('../api/controller/Order');

router.get('/order', Order.getOrderByUserId);

module.exports = router;