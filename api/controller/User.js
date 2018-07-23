const UserModel = require('../model/UserModel');

/**
 * [auth 验证用户信息]
 * @type {Controller} 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function login(req, res, next) {
    try {
        let username = req.body.userName;
        let password = req.body.password;
        UserModel.login({username, password}, result => {
            res.send(result)
        });
    } catch (error) {
        console.log(error);
    }
}

/**
 * [getUserList 根据用户ID获取用户信息]
 * @type {Controller} 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function getUserList(req, res, next) {
    try {
        UserModel.getUserList(result => {
            res.send(result)
        });
    } catch (error) {
        console.log(error);
    }
}


/**
 * [auth 验证用户信息]
 * @type {Controller} 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function auth(req, res, next) {
    try {
        res.json({
            code: 0,
            message: '授权成功'
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getUserList,
    login,
    auth
}