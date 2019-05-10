var express = require('express');
var app = express();
var fs = require("fs");
const path = require('path');// 引入处理路径的模块
var bodyParser = require('body-parser');
var multer = require('multer');

// 访问静态资源文件 这里是访问所有dist目录下的静态资源文件
app.use(express.static(path.resolve(__dirname, './public')))
app.get('*', function (req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, './public/index.html'), 'utf-8')
    res.send(html)
})
//application/x-www-form-urlencoded传参格式为Form Data，参数在req.body中，后台取req.body为原始的a=1&b=2的字符串格式，需要用body-parser转成json对象
app.use(bodyParser.urlencoded({ extended: true }));

//引入路由监听
app.use('/mogo', require('./mogo'));
app.use('/lottery', require('./lottery'));
app.use('/yxcode-gateway', require('./yxcode-gateway'));

// CORS 配置
app.all('*', function (req, res, next) {
    res.header('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'accept,content-type');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next();
//  if (req.method.toUpperCase() === 'OPTIONS') {
//      res.end();
//  } else {
//      next();
//  }
});

var server = app.listen(8090, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})

