const BaseModel = require('./BaseModel');
const UserService = require('../service/UserService');

class UserModel extends BaseModel {
    constructor() {
        super();
    }

    login(user, callback) {
        let sql =  `SELECT 
                        user_id, user_name, nickname, password, telephone, gender, age
                    FROM 
                        user 
                    WHERE 
                        user_name = '${user.username}'`;
        this.query(sql, {}, (err, result, fileds) => {
            if (err) {
                console.log(err);
            }
            result = UserService.login(user, result);
            callback && callback(result)
        });
    }

    /**
     * [getUserInfoByUserId 根据用户id查找用户信息]
     * @param {Number} id 
     * @param {Function} callback 
     */
    getUserList(callback) {
        let sql =  `SELECT 
                        user_id, user_name, nickname, password, telephone, gender, age
                    FROM 
                        user`;
        this.query(sql,{},(err, result, fileds) => {
            if (err) {
                console.log(err);
            }
            callback && callback(result)
        });
    }
}

module.exports = new UserModel();