const OrderModel = require('../model/OrderModel');
const OrderService = require('../service/OrderService');
const output = require('../../common/output');

async function getOrderByUserId(req, res, next) {
    try {
        let user_id = req.uid;
        let order = await OrderModel.getOrderByUserId(user_id);
        let result = OrderService.disposeOrders(order);
        res.send(output.returnValue(0, 'success', {order: result}));
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getOrderByUserId
}