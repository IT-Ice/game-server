const express = require('express');
const router = express.Router();
const Theme = require('../api/controller/Theme');

router.get('/getTheme', Theme.getTheme);

module.exports = router;