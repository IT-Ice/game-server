const config = require('../../config');
const mysql = require('mysql');

class BaseModel {
    constructor() {
        this.host = config.db.host;
        this.port = config.db.port;
        this.user = config.db.user;
        this.password = config.db.password;
        this.database = config.db.database;
        this.pool = null;
        this.createPool();
    }

    /**
     * [createPool 创建连接池]
     */
    createPool() {
        this.pool = mysql.createPool({
            host: this.host,
            user: this.user,
            password: this.password,
            database: this.database,
            port: this.port
        });
    }

    /**
     * [query 数据库操作函数]
     * @param {String} sql 
     * @param {Object} options 
     * @param {Function} callback 
     */
    query(sql, options, callback) {
        this.pool.getConnection((err, conn) => {
            if(err) {
                callback && callback(err, null, null);
            }else{
                conn.query(sql, options, (err, result, fields) => {
                    //释放连接  
                    conn.release();
                    //事件驱动回调  
                    callback && callback(err,result,fields);
                });
            }
        })
    }
}

module.exports = BaseModel;