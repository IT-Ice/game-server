const config = require('../../config');
const mysql = require('mysql');
const pool = mysql.createPool({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
    port: config.db.port
});
class BaseModel {
    constructor() {
       
    }

    /**
     * [query 数据库操作函数]
     * @param {String} sql 
     * @param {Object} options 
     * @param {Function} callback 
     */
    query(sql, value = []) {
        return new Promise((resolev, reject) => {
            pool.getConnection((err, conn) => {
                if (err) return reject(err);
                conn.query(sql, value, (err, result, fields) => {
                    if (err) reject(err)
                    else resolev(result)
                    conn.release();
                });
            })
        })
    }
}

module.exports = BaseModel;