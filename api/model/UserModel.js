const BaseModel = require('./BaseModel');
class UserModel extends BaseModel {
    constructor() {
        super();
    }

    /**
     * [login 用户登录]
     * @param {string} uid 
     */
    async login(uid) {
        let sql = `SELECT 
                        user_id as userId, nick_name as nickName, gender, avatar as avatarUrl
                    FROM 
                        user 
                    WHERE 
                    user_id = ?`;
        let result = await this.query(sql, [uid]);
        return result;
    }

    /**
     * [register 登记用户信息]
     * @param {obj} userInfo 
     */
    async register(userInfo) {
        let sql = `INSERT INTO USER(
            user_id ,
            open_id ,
            union_id ,
            nick_name ,
            avatar ,
            gender ,
            city ,
            province ,
            country
        )
        VALUES
            (? , ? , ? , ? , ? , ? , ? , ? , ?)`;
        const {openId, unionId, nickName, avatarUrl, gender, city, province, country} = userInfo;
        let result = await this.query(sql, [openId, openId, unionId, nickName, avatarUrl, gender, city, province, country]);
        return result;
    }

    /**
     * [getUserInfoByUserId 根据用户id查找用户信息]
     * @param {Number} id 
     * @param {Function} callback 
     */
    async getUserList() {
        let sql = `SELECT 
                        user_id as userId, nick_name as nickName, gender, avatar as avatarUrl
                    FROM 
                        user`;
        let result = await this.query(sql);
        return result;
    }
}

module.exports = new UserModel();