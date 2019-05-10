var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
  extended: false
}));


app.use('/lottery', require('./lottery')); 

app.use('/yxcode-gateway', require('./yxcode-gateway')); 


// CORS 配置
app.all('*', function (req, res, next) {
    res.header('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'accept,content-type');
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
//  if (req.method.toUpperCase() === 'OPTIONS') {
//      res.end();
//  } else {
//      next();
//  }
});

var server = app.listen(8084, function() {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})

