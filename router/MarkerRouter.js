const express = require('express');
const router = express.Router();
const Marker = require('../api/controller/Marker');

router.get('/getMarkers', Marker.getMarkerByRange);

router.get('/getHots', Marker.getHots);

module.exports = router;