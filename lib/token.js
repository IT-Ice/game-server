const NodeRSA = require('node-rsa');
const fs = require('fs');
const output = require('../lib/output');
const whiteList = require('./whiteList');

/**
 * [generator 生产公钥、私钥]
 */
function generator() {
    var key = new NodeRSA({
        b: 512
    })
    key.setOptions({
        encryptionScheme: 'pkcs1'
    })
    var privatePem = key.exportKey('pkcs1-private-pem')
    var publicPem = key.exportKey('pkcs1-public-pem')
    fs.writeFile('./pem/public.pem', publicPem, (err) => {
        if (err) throw err
        console.log('公钥已保存！')
    })
    fs.writeFile('./pem/private.pem', privatePem, (err) => {
        if (err) throw err
        console.log('私钥已保存！')
    })
}
// generator()

/**
 * [encrypt  根据uid生成token]
 * @param {string} uid 
 */
function encrypt(uid = '') {
    try {
        let data = fs.readFileSync('./pem/private.pem');
        let key = new NodeRSA(data);
        let token = key.encryptPrivate(uid, 'base64');
        return token;
    } catch (error) {
        console.log(error);
    }
}

/**
 * [decrypt 根据token解析出uid]
 * @param {string} token 
 */
function decrypt(token = '') {
    try {
        let data = fs.readFileSync('./pem/public.pem');
        let key = new NodeRSA(data);
        let uid = key.decryptPublic( token, 'utf8');
        return {code: 0, msg: 'success', data:{uid: uid}};
    } catch (error) {
        return {code: -10002, msg: 'token 无效', data:{}};
    }
}



/**
 * [check 检验token]
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function check(req, res, next) {
    if (whiteList.indexOf(req.originalUrl) > -1) {
        next();
    } 
    else {
        let token = req.headers['x-access-token'];
        if (token) {
            const result = decrypt(token);
            if (result.code === 0) {
                next();
            } else {
                return res.json(output.returnValue(-10002, '无效的token'));
            }
        } 
        else {
            return res.json(output.returnValue(-10002, '无效的token'));
        }
    }
}

module.exports = {
    encrypt,
    decrypt,
    check
}