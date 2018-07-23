const jwt = require('jsonwebtoken');
const output = require('../../lib/output');
const config = require('../../config');

/**
 * [auth 根据用户名和密码验证用户身份信息并生产token]
 * @param {Object} user 
 * @param {Object} userInfo 
 */
function login(user, userInfo) {
    userInfo = userInfo[0];
    if(!userInfo) {
        return output.returnValue(-1000, '验证失败，用户不存在');
    }
    if (user.password !== userInfo.password) {
        return output.returnValue(-1001, '验证失败，密码错误');
    }
    userInfo.token =  getToken(userInfo);
    return output.returnValue(0, 'success', {user: userInfo});
}

/**
 * [getToken 根据用户信息生成用户token]
 * @param {Object} userInfo 
 * @return {String} token
 */
function getToken(userInfo) {
    let payload = {
        user_id: userInfo.user_id,
        user_name: userInfo.user_name
    }
    let token = jwt.sign(payload, config.superSecret, {
        'expiresIn': 1440 // 设置过期时间
    });
    return token;
}

module.exports = {
    login: login
}