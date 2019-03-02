const db = require('../../common/database');
const mapping = require('../../common/mapping');

class UserModel {

    /**
     * [login 用户登录]
     * @param {string} uid 
     */
    async login(uid) {
        let sql = mapping.login;
        let result = await db.query(sql, [uid]);
        return result;
    }

    /**
     * [register 登记用户信息]
     * @param {obj} userInfo 
     */
    async register(userInfo) {
        let sql = mapping.register;
        const {openId, unionId, nickName, avatarUrl, gender, city, province, country} = userInfo;
        let result = await db.query(sql, [openId, openId, unionId, nickName, avatarUrl, gender, city, province, country]);
        return result;
    }
}

module.exports = new UserModel();