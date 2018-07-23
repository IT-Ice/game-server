const jwt = require('jsonwebtoken');
const config = require('../config');
const output = require('../lib/output');
const whiteList = require('./whiteList');

function check(req, res, next) {
    if (whiteList.indexOf(req.originalUrl) > -1) {
        next();
    }
    else {
        let token = req.body.token || req.query.token || req.headers['x-access-token'];
        if (token) {
            jwt.verify(token, config.superSecret, function(err, decoded) {
                if (err) {
                    return res.json(output.returnValue(-10002, '无效的token'));
                } else {
                    req.api_user = decoded;
                    console.dir(req.api_user);
                    next();
                }
            });
        } else {
            return res.json(output.returnValue(-10002, '无效的token'));
        }
    }
}

module.exports = {
    check: check
}