const express = require('express');
const router = express.Router();
const Marker = require('../api/controller/Marker');

router.get('/marker/all', Marker.getMarkerByRange);

router.get('/marker/hot', Marker.getHots);

router.get('/marker/detail', Marker.getDetailByMid);

module.exports = router;