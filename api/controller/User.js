const UserModel = require('../model/UserModel');
const sha1 = require('sha1');

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
            res.send(result);
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
            res.send(result);
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
        let wx = req.query;
        let token = 'playgame';
        let timestamp = wx.timestamp;
        let nonce = wx.nonce;
        let list = [token, timestamp, nonce].sort();
        let str = list.join('');
        let result = sha1(str);
        if (result === wx.signature) {
            res.send(wx.echostr);
        } else {
            res.send(false);
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getUserList,
    login,
    auth
}