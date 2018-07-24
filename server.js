const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config');
const checkToken = require('./lib/checkToken');
const UserRouter = require('./router/UserRouter');
const RoleRouter = require('./router/RoleRouter');
// 给app配置bodyParser中间件
// 通过如下配置再路由种处理request时，可以直接获得post请求的body部分
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api', checkToken.check, [UserRouter, RoleRouter]);
app.listen(config.port);