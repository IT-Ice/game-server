const UserModel = require('../model/UserModel');
const UserService = require('../service/UserService');
const output = require('../../lib/output');

/**
 * [auth 验证用户信息]
 * @type {Controller} 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
async function login(req, res, next) {
    try {
        let code = req.body.code;
        let encryptedData = req.body.str.encryptedData;
        let iv = req.body.str.iv;
        let wxUserInfo = await UserService.login(code, encryptedData, iv);
        let userId = wxUserInfo.openId;
        let token =  wxUserInfo.token;
        let result = await UserModel.login(userId);
        let userInfo = null;
        if (result.length === 0) {
            let dbmsg = await UserModel.register(wxUserInfo);
            if (dbmsg.warningCount === 0) {
                userInfo = {
                    userId: userId,
                    nickName: wxUserInfo.nickName,
                    avatarUrl: wxUserInfo.avatarUrl,
                    gender: wxUserInfo.gender,
                    token: token
                };
            }
        }else {
            result[0].token = token;
            userInfo = result[0];
        }
        res.send(output.returnValue(0, 'success', userInfo));
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
async function getUserList(req, res, next) {
    try {
        let result = await UserModel.getUserList();
        res.send(result);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getUserList,
    login
}
