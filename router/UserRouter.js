const express = require('express');
const router = express.Router();
const User = require('../api/controller/User');

router.get('/getUserList', User.getUserList);

router.post('/user/login', User.login);

module.exports = router;