var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(multer({
  dest: '/tmp/'
}).array('image'));


//app.all('*', function(req, res, next) {
//  res.header("Access-Control-Allow-Origin", "*");
//  res.header("Access-Control-Allow-Headers", "x-requested-with,content-type");
//  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
////  res.header("X-Powered-By",' 3.2.1')
//  res.header("Content-Type", "application/json;charset=utf-8");
//  next();
//});


app.get('/index.html', function(req, res) {
  res.sendFile(__dirname + "/" + "index.html");
})

app.post('/process_post', function(req, res) {

  // 输出 JSON 格式
  var response = {
    "first_name": req.body.first_name,
    "last_name": req.body.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
})

app.post('/file_upload', function(req, res) {
  console.log(req.files[0]); // 上传的文件信息

  var des_file = __dirname + "/public/uploads/" + req.files[0].originalname;
  fs.readFile(req.files[0].path, function(err, data) {
    fs.writeFile(des_file, data, function(err) {
      if(err) {
        console.log(err);
      } else {
        response = {
          message: 'File uploaded successfully',
          filename: req.files[0].originalname
        };
      }
      console.log(response);
      res.end(JSON.stringify(response));
    });
  });
})
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
var fun = require('./qcloud_upload/sts_ex.js')
app.all('/sts', fun.stsAuth)

var fun2 = require('./qcloud_upload/sts-auth_ex.js')
app.all('/sts-auth', fun2.stsAuth)

var server = app.listen(8084, function() {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})

//WebSocket测试
var WebSocket = require('ws');
var wss = new WebSocket.Server({server});

var stocks = {
  "waitPrejudication": 0,
  "waitApply": 0,
  "waitSignContact": 0,
  "waitFunds": 0
}
var clientStocks = [];

function randomInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
var stockUpdater;
var randomStockUpdater = function() {
  for(var symbol in stocks) {
    if(stocks.hasOwnProperty(symbol)) {
      var randomizedChange = randomInterval(0, 150);
      var floatChange = parseInt(randomizedChange / 100);
      stocks[symbol] += floatChange;
    }
  }
  var randomMSTime = randomInterval(500, 2500);
  stockUpdater = setTimeout(function() {
    randomStockUpdater();
  }, randomMSTime);
}
randomStockUpdater();

wss.on('connection', function(ws) {
  console.log('client connected');
  var sendStockUpdates = function(ws) {
    if(ws.readyState == 1) {
      var stocksObj = {};
      for(var i = 0; i < clientStocks.length; i++) {
        var symbol = clientStocks[i];
        stocksObj[symbol] = stocks[symbol];
      }
      if(stocksObj.length !== 0) {
        ws.send(JSON.stringify(stocksObj)); //需要将对象转成字符串。WebSocket只支持文本和二进制数据
        console.log("更新", JSON.stringify(stocksObj));
      }
    }
  }
  var clientStockUpdater = setInterval(function() {
    sendStockUpdates(ws);
  }, 5000);
  ws.on('message', function(message) {
    console.log(message);
    console.log("收到消息");
    var stockRequest = JSON.parse(message); //根据请求过来的数据来更新。
    console.log("收到消息", stockRequest);
    clientStocks = stockRequest['stocks'];
    sendStockUpdates(ws);
  });
});