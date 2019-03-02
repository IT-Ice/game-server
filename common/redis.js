const redis = require("redis");
const config = require('../config');
const bluebird = require("bluebird");

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const client = redis.createClient(config.redis.port, config.redis.host, {
    auth_pass: config.redis.password
});

client.on("error", function (err) {
    console.log("Error " + err);
});

module.exports = client;