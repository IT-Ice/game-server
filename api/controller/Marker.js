const MarkerModel = require('../model/MarkerModel');
const MarkerService = require('../service/MarkerService');
const output = require('../../common/output');

/**
 * [getMarkerByRange 查询服务点]
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
async function getMarkerByRange (req, res, next) {
    try {
        let latitude = req.query.latitude;
        let longitude = req.query.longitude;
        let markers = await MarkerModel.getMarker(latitude, longitude);
        let result = MarkerService.markers(markers);
        res.send(output.returnValue(0, 'success', {marker: result}));
    } catch (error) {
        console.log(error)
    }
}

/**
 * [getHots 根据城市获取热门推荐]
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
async function getHots (req, res, next) {
    try {
        let city = req.query.city;
        let hots = await MarkerModel.getHots(city);
        let result = MarkerService.hots(hots);
        res.send(output.returnValue(0, 'success', {hots: result}));
    } catch (error) {
        console.log(error)
    }
}

/**
 * [getDetailByMid 根据商户id获取商户详情]
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
async function getDetailByMid (req, res, next) {
    try {
        let mid = req.query.mid;
        let detail = await MarkerModel.getDetailByMid(mid);
        let result = MarkerService.detail(detail);
        res.send(output.returnValue(0, 'success', {detail: result}));
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getMarkerByRange, getHots, getDetailByMid
} 