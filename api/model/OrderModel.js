const db = require('../../common/database');
const mapping = require('../../common/mapping');

class OrderModel {

    async getOrderByUserId(user_id) {
        let sql = mapping.getOrderByUserId;
        let result = await db.query(sql, [user_id]);
        return result;
    }
}

module.exports = new OrderModel();