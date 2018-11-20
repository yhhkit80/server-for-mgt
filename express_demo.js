//express_demo.js 文件
var express = require('express');
var app = express();
var fs = require("fs");

// 创建 application/x-www-form-urlencoded 编码解析
var bodyParser = require('body-parser');
var multer  = require('multer');

//使用 express.static 中间件来设置静态文件路径。例如将图片,CSS,JavaScript文件放在 public 目录下
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//app.use(multer({ dest: '/tmp/'}).array('image'));
var createFolder = function(folder){
    try{
        fs.accessSync(folder); 
    }catch(e){
        fs.mkdirSync(folder);
    }  
};

var uploadFolder = './upload/';

createFolder(uploadFolder);

// 通过 filename 属性定制
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadFolder);    // 保存的路径，备注：需要自己创建
    },
    filename: function (req, file, cb) {
        // 将保存文件名设置为 字段名 + 时间戳，比如 logo-1478521468943
        cb(null, file.originalname)
        //cb(null, file.fieldname + '-' + Date.now());  
    }
});

// 通过 storage 选项来对 上传行为 进行定制化
var upload = multer({ storage: storage })

// 单图上传
app.post('/profile', upload.single('image'), function(req, res, next){
    var file = req.file;
    res.send({ret_code: '0'});
});




app.post('/file_upload', function (req, res) {
   console.log(req.body,req.files[0]);  // 上传的文件信息
   var des_file = __dirname + "/public/uploads/" + req.files[0].originalname;
   fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
         if( err ){
              console.log( err );
         }else{
               response = {
                   message:'File uploaded successfully', 
                   filename:req.files[0].originalname
              };
          }
          console.log( response );
          res.send( JSON.stringify( response ) );
       });
   });
})
 
 
app.get('/index.html', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
})
app.get('/process_get', function(req, res) {
    // 输出 JSON 格式
    var response = {
        "first_name": req.query.first_name,
        "last_name": req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

app.post('/process_post', urlencodedParser, function (req, res) {
   // 输出 JSON 格式
   var response = {
       "first_name":req.body.first_name,
       "last_name":req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
    //res.send('Hello World');
})

app.get('/user', function(req, res) {
    // --

    console.log('req.content-type', req.get('content-type'))
    console.log('req.params', req.params)
    console.log('req.query', req.query)
    res.send({
        result: 'Hello World'
    });
})
// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {
    console.log("/ab*cd GET 请求");
    res.send('正则匹配');
})
var server = app.listen(8081, function() {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})