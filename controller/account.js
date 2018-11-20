// controller/account.js

exports.userById = userById;
exports.createUser = createUser;

function userById(req, res) {
    res.end('waiting for impl.');
}

function createUser(req, res) {
    res.end('waiting for impl.');
}

const multer = require('multer');
let path = require("path");
//上传文件配置  
const storage = multer.diskStorage({
    //文件存储位置  
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, '../uploads/tmp/'));
    },
    //文件名  
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${Math.ceil(Math.random() * 1000)}_multer.${file.originalname.split('.').pop()}`);
    }
});
const uploadCfg = {
    storage: storage,
    limits: {
        //上传文件的大小限制,单位bytes  
        fileSize: 1024 * 1024 * 20
    }
};

function upload(req, res) {
    let doupload = multer(uploadCfg).any();
    doupload(req, res, async(err) => {
        if(err) {
            res.json({
                path: `//uploads/tmp/${uploadFile.filename}`
            });
            console.log(err);
            return;
        };
        console.log(req.files);
        let uploadFile = req.files[0];
        res.json({
            path: `//uploads/tmp/${uploadFile.filename}`
        });
    });
}