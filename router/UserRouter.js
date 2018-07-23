const express = require('express');
const router = express.Router();
const User = require('../api/controller/User');

router.get('/getUserList', User.getUserList);

router.post('/login', User.login);

router.get('/auth', User.auth);

module.exports = router;