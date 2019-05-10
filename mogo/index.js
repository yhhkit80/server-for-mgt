let express = require('express');   // 引入express文件
let router = express.Router();      // 创建router实例
let Mock = require('mockjs');       // 引入mockjs模块创建假数据
var querystring = require('querystring');
let mogo = require('./interface');
// import {
//     orderStatsQuery,
//     // noticeInfoQuery,
//     // shortcutMenuList,
//     // personalGtasksStats,
//     // personalGtasksList,
//     // takeTask,
//     // chartQuery
// } from './interface'

// Mock.mock(/\/mogo\/mogox\/home\/orderStatsQuery/, orderStatsQuery)
// Mock.mock(/\/mogo\/mogox\/home\/noticeInfoQuery/, noticeInfoQuery)
// Mock.mock(/\/mogo\/mogox\/home\/shortcutMenuList/, shortcutMenuList)
// Mock.mock(/\/mogo\/mogox\/home\/personalGtasksStats/, personalGtasksStats)
// Mock.mock(/\/mogo\/mogox\/home\/personalGtasksList/, personalGtasksList)
// Mock.mock(/\/mogo\/mogox\/home\/takeTask/, takeTask)
// Mock.mock(/\/mogo\/mogox\/home\/chartQuery/, chartQuery)

// export default Mock

router.all('/mogox/home/orderStatsQuery.jjs', function (req, res) {
    const data = mogo.orderStatsQuery(req)
    res.json(data);
});
router.all('/mogox/home/noticeInfoQuery.jjs', function (req, res) {
    const data = mogo.noticeInfoQuery(req)
    res.json(data);
});
router.all('/mogox/home/shortcutMenuList.jjs', function (req, res) {
    const data = mogo.shortcutMenuList(req)
    res.json(data);
});
router.all('/mogox/home/personalGtasksStats.jjs', function (req, res) {
    const data = mogo.personalGtasksStats(req)
    res.json(data);
});
router.all('/mogox/home/personalGtasksList.jjs', function (req, res) {
    //application/x-www-form-urlencoded方式时取req.boby（注意：所有参数的值都会变为字符串格式，不会区分数字类型和布尔类型）
    /*req.payload=req.body;
    const data = mogo.personalGtasksList(req)
    res.json(data);*/

    //application/json方式时每次手动处理,保留原参数值的类型
    var str = "";
    req.on("data", function (chunk) {
        str += chunk
    })
    req.on("end", function () {
        req.payload = !!str ? JSON.parse(str) : {};
        const data = mogo.personalGtasksList(req)
        res.json(data);
    })
});
router.all('/mogox/home/takeTask.jjs', function (req, res) {
    const data = mogo.takeTask(req)
    res.json(data);
});
router.all('/mogox/home/chartQuery.jjs', function (req, res) {
    const data = mogo.chartQuery(req)
    res.json(data);
});

module.exports = router;