const config = require('../config');
const mysql = require('mysql');
const pool = createPool();

function createPool () {
    let pool =  mysql.createPool({
        host: config.db.host,
        user: config.db.user,
        password: config.db.password,
        database: config.db.database,
        port: config.db.port
    });
    return pool;
}

function query (sql, value = []) {
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

module.exports = {
    query
}