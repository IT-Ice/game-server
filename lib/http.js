const request = require('request');

function post(opts) {
    return new Promise((resolve, reject) => {
        request.post(opts, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                if (body !== 'null') {
                    results = JSON.parse(body);
                    resolve(results);
                }
            } else {
                reject(error);
            }
        });
    });
}

function get(opts) {
    return new Promise((resolve, reject) => {
        request.get(opts, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                if (body !== 'null') {
                    results = JSON.parse(body);
                    resolve(results);
                }
            } else {
                reject(error);
            }
        });
    });
}

module.exports = {
    post, get
}