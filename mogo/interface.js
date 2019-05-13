// import Mock from 'mockjs'
let Mock = require('mockjs');
// orderStatsQuery, noticeInfoQuery, shortcutMenuList, personalGtasksStats,  personalGtasksList, takeTask,
// 获取 mock.Random 对象
const Random = Mock.Random;
//req.body是收到的参数JSON字符串，不是JSON对象

const mogo = {};
//扩展随机规则
Random.extend({
    carbrand: function (date) {
        var carbrand = ['奥迪', '阿尔法', '阿斯顿', 'ART', '宝马', '本田', '奔驰', '保时捷', '大众', '宝沃',
            'smart', '西雅图', 'ALPINA'
        ]
        return this.pick(carbrand)
    },
    carstyle: function (date) {
        var carstyle = ['奥迪 2019款 180Turbo 手动舒适版', '阿尔法 双引擎1.8L CVT 双引擎豪华版', '阿斯顿 2018款 2.0L双引擎舒适款', 'ART 2018款 2.0L双引擎舒适款', '宝马 2018款 2.0L双引擎舒适款', '本田 2018款 2.0L双引擎舒适款', '奔驰 2018款 2.0L双引擎舒适款', '保时捷 2018款 2.0L双引擎舒适款', '大众 2018款 2.0L双引擎舒适款', '宝沃 2018款 2.0L双引擎舒适款',
            'smart 2018款 2.0L双引擎舒适款', '西雅图 2018款 2.0L双引擎舒适款', 'ALPINA 2018款 2.0L双引擎舒适款'
        ]
        return this.pick(carstyle)
    }
})

var numReg = /^(([1-9]\d{1,2})|([1-9]\d{1,2}\.\d{1,2}))$/;
var amountReg = /^(([1-9]\d{1,5})|([1-9]\d{1,5}\.\d{1,2}))$/;
var phoneReg = /^1[3|4|5|6|7|8|9]\d{9}$/;
// let ercodeImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAEECAIAAABBat1dAAAD+UlEQVR4nO3dwY7TMBRA0Rbx/788bK5GiAUOsmWc9Jw1omk6V948Pb+/vr5ewOv1438/AJxCDBAxQMQAEQNEDBAxQMQAEQNEDJCfw3/xfr83PMch9gynDF/pIY/xJFdeqZMBIgaIGCBigIgBIgaIGCBigIgBIgbIeBxj6Eb7Ne4ygHDIvMan/bJOBogYIGKAiAEiBogYIGKAiAEiBogYIAvGMYb2DEGcMzswP0wx/B+uvNInrdjY812cDBAxQMQAEQNEDBAxQMQAEQNEDBAxQMQA2TGb9GnmR4/4L5wMEDFAxAARA0QMEDFAxAARA0QMEDFAjGP8myU7Ws7ZasPvnAwQMUDEABEDRAwQMUDEABEDRAwQMUB2jGM8afrgkOtwznml5zzJPCcDRAwQMUDEABEDRAwQMUDEABEDRAwQMUAWzCZ91D00S1bFzI8eLXmMoY/6ZV9OBvgmBogYIGKAiAEiBogYIGKAiAEiBsh4HONJu0D2uMsUg1/2D04GiBggYoCIASIGiBggYoCIASIGiBggO27uWTKesGR24C6DEkNX3sb8l13yKTca+nAyQMQAEQNEDBAxQMQAEQNEDBAxQMQAEQPkveSSmL87Z6xow506VzxmROq16JKhDa78cE4GiBggYoCIASIGiBggYoCIASIGiBggC8YxDtkFcs5CmnmHfJdDHmMbJwNEDBAxQMQAEQNEDBAxQMQAEQNEDJDb3NyzxI1GA+bNz9HseV17/jxsx4B/IAaIGCBigIgBIgaIGCBigIgBIgbIeBxjz20Uez5lfkLh0xZGDB2yPGXJpzgZIGKAiAEiBogYIGKAiAEiBogYIGKAiAEyvrmH312ZTTrklc6PUS35Ijea5nIyQMQAEQNEDBAxQMQAEQNEDBAxQMQAGa+KOefenQ0OuavmRhtrDvnzWLKxxskAEQNEDBAxQMQAEQNEDBAxQMQAEQNkPI4xdMgyiCv2LIzYMG2xZ5Liyqcc8l2WcDJAxAARA0QMEDFAxAARA0QMEDFAxAARA2TBbNLQnm0i54y4HPIkexbSzH/ZQ5bNvJwM8E0MEDFAxAARA0QMEDFAxAARA0QMkB3jGE+yZEJhfgDhnBGGJ91C5GSAiAEiBogYIGKAiAEiBogYIGKAiAFiHONEe/ZrnDPTMbTnhTgZIGKAiAEiBogYIGKAiAEiBogYIGKAiAGyYzbpkJtslljyXQ7ZnrLnMfZMQM1vrHk5GeCbGCBigIgBIgaIGCBigIgBIgaIGCALxjFutHFkjyWjAXd5jPn/xM09cBwxQMQAEQNEDBAxQMQAEQNEDBAxQN5PWl0BM5wMEDFAxAARA0QMEDFAxAARA0QMEDFAxAD5BVn2+wfjFK/cAAAAAElFTkSuQmCC'
// "imgSrc": Random.image('200x200', '#02adea', 'Hello'),
// "result|1": ['1', '0'],
// "name": '@cname',
// "applyNo": 1000 + Random.integer(0, 100),
// name: '@cname',
// phone: /^1[3-9][1-9]\d{8}/,
// address: '@county(true)',
// certNo: "@id", //与Mock.Random.id()一样,
// "valid_date": '@date',
// "bank_cardno": /^\d{18}/,

//查询图表数据
mogo.chartQuery = req => {
    const amountReg = /^(([1-9]\d{2,3})|([1-9]\d{2,3}\.\d{1,2}))$/;
    let resData = Mock.mock([
        { value: amountReg, name: '已还金额' },
        { value: amountReg, name: '逾期金额' },
        { value: amountReg, name: '剩余金额' },
    ])
    return {
        "respCode": "0000",
        "respMsg": "成功",
        "data": resData
    }
}

//查询个人进件审批统计信息
mogo.orderStatsQuery = req => {
    const numReg = /^([1-9]\d{1,2})$/;
    const amountReg = /^(([1-9]\d{2,3})|([1-9]\d{2,3}\.\d{1,2}))$/;
    let resData = Mock.mock({
        "prepNum": numReg,
        "prepAmount": amountReg,
        "dayRefuseNum": numReg,
        "dayRefuseAmt": amountReg,
        "dayPassNum": numReg,
        "dayPassAmt": amountReg
    })
    return {
        "respCode": "0000",
        "respMsg": "成功",
        "data": resData
    }
}
//查询系统发布的公告简要信息列表，仅展示当前操作人有权限查询的数据
mogo.noticeInfoQuery = req => {
    let tableData = [];
    for (let i = 0; i < 3; i++) {
        tableData.push(Mock.mock({
            "id": "@id",
            "title": "@ctitle",
            "content": "@cparagraph",
            "publishDate": "@date(2019/MM/dd)",
            "status|1": ["01", "00"]
        }))
    }
    return {
        "respCode": "0000",
        "respMsg": "成功",
        data: tableData,
    }
}

//查询当前操作人对应的快捷菜单列表
mogo.shortcutMenuList = req => {
    let tableData = [{
        "pageUrl": "",
        "sequenceNo": 1,
        icon: 'order-edit',
        menuName: '进件提报',
    }, {
        "pageUrl": "",
        "sequenceNo": 2,
        icon: 'order-search',
        menuName: '订单查询',
    }, {
        "pageUrl": "",
        "sequenceNo": 3,
        icon: 'statis-report',
        menuName: '统计报表',
    }, {
        "pageUrl": "",
        "sequenceNo": 4,
        icon: 'prod-center',
        menuName: '产品中心',
    }, {
        "pageUrl": "",
        "sequenceNo": 5,
        icon: 'prod-center',
        menuName: '测试菜单',
    }]
    return {
        "respCode": "0000",
        "respMsg": "成功",
        data: tableData,
    }
}

//以流程模板和任务节点为维度，统计指定操作人名下所有的待办流程及任务集合
mogo.personalGtasksStats = req => {
    let tableData = [];
    for (let i = 0; i < 5; i++) {
        let arr = [];
        for (let i = 0; i < 10; i++) {
            arr.push(Mock.mock({
                "nodeId": "@id",
                "nodeName": "@ctitle(2,8)",
            }))
        }
        tableData.push(Mock.mock({
            "templateId": "@id",
            "templateName": "@ctitle(2,8)",
            "children": arr
        }))
    }
    return {
        "respCode": "0000",
        "respMsg": "成功",
        data: tableData,
    }
}
//查询指定操作人待办明细列表，带分页
mogo.personalGtasksList = req => {
    // var params = JSON.parse(req.body);mock需要取req.body并转成json对象
    var params = req.body;//Form Data时直接req.body就是参数，已在入口处使用bodyParser统一转换成了json对象
    var params = req.payload;//Requery Payload时是已经在该路由中被转换后的自定义数据
    var pageSize = params.pageSize || 10, pageNo = params.pageNo || 1;
    var total = 33;
    var count = total - (pageNo - 1) * pageSize;
    var size = count > pageSize ? pageSize : count;
    var nodeTotal = 0;

    if (params.nodeId != '') {
        nodeTotal = 13;
    }
    let tableData = [];
    for (let i = 0; i < size; i++) {
        tableData.push(Mock.mock({
            "processId|1": ["process1", "process2"],
            "taskId": /^TASK([0-9]\d{7})$/,
            "templateId|1": ["template1", "template2"],
            "nodeId|1": ["node1", "node2"],
            "pageUrl|1": ["url1", "url2"],
            "createTime": "@datetime",
            "ext1": "",
            "ext2": "",
        }))
    }
    return {
        "respCode": "0000",
        "respMsg": "成功",
        data: {
            "nodeTotal": nodeTotal,
            "total": total,
            "rows": tableData
        },
    }
}
//任务处理之前，要调用此接口校验该任务是否为合法任务，同时更新任务状态
mogo.takeTask = req => {
    let row = Mock.mock({
        "baseInfo": {
            "orderStatus|1": ["提报", "征信", "核查", "评估DSFASDFASDFASDF", "风险审批风险审批", "确认合同", "请款", "初审", "复审", "保单", "GPS", "首保审核", "付款数据", "提车", "选择放款", "放款审核"],
            "prodName": "@ctitle(5,18)",
            "custName": "@cname",
            "sex|1": ["1", "2"],
            "status|1": [0, 1],
            "plnNo": /^PLN([0-9]\d{7})$/,
            "orderNo": /^1800([0-9]\d{7})$/,
            "orderDate": "@datetime",
            "finaceAmount": /^([1-9]\d{5,7})$/,
            "carStyle": "@carstyle",
            "carColor|1": ["红色", "黑色", "银色", "白色", "蓝色"],
            "tags": {
                "rentType|1": ["正租", "回租"],
                "carType|1": ["新车", "二手车"],
                "applyType|1": ["个人", "企业"],
                "paymentRefrequency|1": ["月付", "季付"],
                "paymentType|1": ["等额本息", "等本等期"],
                "period|1": ["12期", "24期", "36期"],
            },
            "rejectStatus|1": [0, 1],
        },
        //card2中用到的
        "collectionStatus": {
            "type1|1": [1, 0],
            "type2|1": [1, 0],
            "type3|1": [1, 0],
            "type4|1": [1, 0],
        },
        "detail": {
            "payDate|1": ["每月15日", "每月25日", "每月1日"],
            "overdueTimes|1": ["1次", "2次", "3次"],
            "payTimes|1": ["3期", "5期", "6期"],
            "overdueDays|1": ["8天", "15天", "26天"],
            "riskGrade|1": ["B", "C"],
        },
        "chart": {}
    })
    return {
        "respCode": "0000",
        "respMsg": "成功",
        data: row
    }
}

module.exports = mogo;