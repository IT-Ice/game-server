const BaseModel = require('./BaseModel');
const output = require('../../lib/output');
class UserModel extends BaseModel {
    constructor() {
        super();
    }

    async login(username) {
        let sql =  `SELECT 
                        user_id, user_name, nickname, password, telephone, gender, age
                    FROM 
                        user 
                    WHERE 
                        user_name = ?`;
        let result = await this.query(sql, [username]);
        return result;
    }

    /**
     * [getUserInfoByUserId 根据用户id查找用户信息]
     * @param {Number} id 
     * @param {Function} callback 
     */
    async getUserList() {
        let sql =  `SELECT 
                        user_id, user_name, nickname, password, telephone, gender, age
                    FROM 
                        user`;
        let result = await this.query(sql);
        return output.returnValue(0, 'success', result);
    }
}

module.exports = new UserModel();