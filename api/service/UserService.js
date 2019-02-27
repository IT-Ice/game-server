const config = require('../../config');
const http = require('../../lib/http');
const WXBizDataCrypt = require('../../lib/WXBizDataCrypt');
const Token = require('../../lib/token');

/**
 * [auth 验证用户身份信息并生产token]
 * @param {Object} user 
 * @param {Object} userInfo 
 */
async function login(code, encryptedData, iv) {
    try {
        const APP_ID = config.appid;
        const APP_SECRET = config.appsecret;
        let data = await http.get({
            url: `https://api.weixin.qq.com/sns/jscode2session?appid=${APP_ID}&secret=${APP_SECRET}&js_code=${code}&grant_type=authorization_code`
        });
        let sessionKey = data.session_key;
        let pc = new WXBizDataCrypt(APP_ID, sessionKey);
        let result = pc.decryptData(encryptedData, iv);
        result.token = Token.encrypt(result.openId);
        return result;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    login: login
}