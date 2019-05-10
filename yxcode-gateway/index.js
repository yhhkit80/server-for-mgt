let express = require('express');   // 引入express文件
let router = express.Router();      // 创建router实例
let Mock = require('mockjs');       // 引入mockjs模块创建假数据

/*初始页中*/
router.all('/static/login', function (req, res) {
    const data = require('./api/static/login.json')
    res.json(data);
});
router.all('/user/currentUser', function (req, res) {
    const data = require('./api/user/currentUser.json')
    res.json(data);
});
router.all('/user/appCurrentUser', function (req, res) {
    const data = require('./api/user/appCurrentUser.json')
    res.json(data);
});
router.all('/polaris/order/upcoming', function (req, res) {
    const data = require('./api/order/upcoming.json')
    res.json(data);
});
router.all('/polaris/order/queryPage', function (req, res) {
    const data = require('./api/order/queryPage.json')
    res.json(data);
});
router.all('/yx-message/message/list', function (req, res) {
    const data = require('./api/yx-message/message/list.json')
    res.json(data);
});
router.all('/polaris/channel/list', function (req, res) {
    const data = require('./api/channel/list.json')
    res.json(data);
});
/*授权页中*/
router.all('/polaris/credit/getTransactionId/T', function (req, res) {
    const data = require('./api/credit/getTransactionId.json')
    res.json(data);
});
router.all('/polaris/credit/scanIdCard', function (req, res) {
    const data = require('./api/credit/scanIdCard.json')
    res.json(data);
});
router.all('/polaris/credit/scanBankCard', function (req, res) {
    const data = require('./api/credit/scanBankCard.json')
    res.json(data);
});
router.all('/polaris/credit/checkTelAndBankNo', function (req, res) {
    const data = require('./api/credit/checkTelAndBankNo.json')
    res.json(data);
});
router.all('/polaris/credit/getQrCode', function (req, res) {
    const data = require('./api/credit/getQrCode.json')
    res.json(data);
});
router.all('/polaris/credit/checkIdCard', function (req, res) {
    const data = require('./api/credit/checkIdCard.json')
    res.json(data);
});
router.all('/base-server/annexStorage/annexsignkey', function (req, res) {
    const data = require('./api/annexStorage/annexsignkey.json')
    res.json(data);
});
router.all('/base-server/annexStorage/annexcloudview', function (req, res) {
    const jsonData = require('./api/annexStorage/annexcloudview.json')
    let data = jsonData
    res.json(data);
});
router.all('/base-server/cloudStorage/annexcloudsigninfo', function (req, res) {
    const data = require('./api/cloudStorage/annexcloudsigninfo.json')
    res.json(data);
});
router.all('/base-server/cloudStorage/annexordervalidate', function (req, res) {
    const data = require('./api/cloudStorage/annexordervalidate.json')
    res.json(data);
});
router.all('/base-server/cloudStorage/annexstructupdateandquery', function (req, res) {
    const data = require('./api/cloudStorage/annexstructupdateandquery.json')
    res.json(data);
});

/*预审页中*/
router.all('/polaris/channel/product/page', function (req, res) {
    const data = require('./api/channel/product/page.json')
    res.json(data);
});
router.all('/polaris/product/getCommonlyProductInfo/:account', function (req, res) {
    const data = require('./api/product/getCommonlyProductInfo.json')
    res.json(data);
});
router.all('/polaris/product/queryMasterBrandList', function (req, res) {
    const data = require('./api/product/queryMasterBrandList.json')
    res.json(data);
});
router.all('/polaris/product/queryBrandList', function (req, res) {
    const data = require('./api/product/queryBrandList.json')
    res.json(data);
});
router.all('/polaris/product/queryModelList', function (req, res) {
    const data = require('./api/product/queryModelList.json')
    res.json(data);
});
router.all('/polaris/credit/createPreTrial', function (req, res) {
    const data = require('./api/credit/createPreTrial.json')
    res.json(data);
});
router.all('/polaris/credit/getOrderModifyDetail/:account/:orderNo', function (req, res) {
    const data = require('./api/credit/getOrderModifyDetail.json')
    res.json(data);
});
router.all('/polaris/credit/updatePretrial', function (req, res) {
    const data = require('./api/credit/updatePretrial.json')
    res.json(data);
});
router.all('/polaris/credit/sendSms', function (req, res) {
    const data = require('./api/credit/sendSms.json')
    res.json(data);
});
router.all('/polaris/credit/initOrderInfo', function (req, res) {
    const data = require('./api/credit/initOrderInfo.json')
    res.json(data);
});
/*客户信息*/
router.all('/polaris/order/orderDetail/:orderNo', function (req, res) {
    const data = require('./api/order/orderDetail.json')
    res.json(data);
});
router.all('/polaris/customer/personal/query/:orderNo', function (req, res) {
    const data = require('./api/customer/personal/query.json')
    res.json(data);
});
router.all('/polaris/customer/relationship/query/:orderNo', function (req, res) {
    const data = require('./api/customer/relationship/query.json')
    res.json(data);
});
router.all('/polaris/customer/enterprise/findBasic/:orderNo', function (req, res) {
    const data = require('./api/customer/enterprise/findBasic.json')
    res.json(data);
});
router.all('/polaris/customer/enterprise/findLicense/:orderNo', function (req, res) {
    const data = require('./api/customer/enterprise/findLicense.json')
    res.json(data);
});
router.all('/polaris/customer/contact/query/:orderNo', function (req, res) {
    const data = require('./api/customer/contact/query.json')
    res.json(data);
});
router.all('/polaris/customer/guarantor/query/:orderNo', function (req, res) {
    const data = require('./api/customer/guarantor/query.json')
    res.json(data);
});
router.all('/polaris/customer/enterprise/submit', function (req, res) {
    const enterpriseSubmit = require('./api/customer/enterprise/submit.json')
    let data = enterpriseSubmit
    res.json(data);
});
router.all('/polaris/customer/personal/submit', function (req, res) {
    const personalSubmit = require('./api/customer/personal/submit.json')
    let data = personalSubmit
    res.json(data);
});
/*贷款信息*/
router.all('/polaris/finance/query/baseInfo/:orderNo', function (req, res) {
    const data = require('./api/finance/query/baseInfo.json')
    res.json(data);
});
router.all('/polaris/finance/query/financeItemInfo/:orderNo', function (req, res) {
    const data = require('./api/finance/query/financeItemInfo.json')
    res.json(data);
});
router.all('/polaris/finance/query/financeDiscountInfo', function (req, res) {
    const data = require('./api/finance/query/financeDiscountInfo.json')
    res.json(data);
});
router.all('/polaris/finance/query/financeMarginInfo/:orderNo', function (req, res) {
    const data = require('./api/finance/query/financeMarginInfo.json')
    res.json(data);
});
router.all('/polaris/finance/query/financeCalculationInfo/:orderNo', function (req, res) {
    const data = require('./api/finance/query/financeCalculationInfo.json')
    res.json(data);
});
router.all('/polaris/finance/calculation/financeInfo', function (req, res) {
    const data = require('./api/finance/calculation/financeInfo.json')
    res.json(data);
});
router.all('/polaris/finance/save/financeInfo', function (req, res) {
    const data = require('./api/finance/save/financeInfo.json')
    res.json(data);
});
router.all('/polaris/order/confirm', function (req, res) {
    const data = require('./api/order/confirm.json')
    res.json(data);
});
router.all('/polaris/order/submit', function (req, res) {
    const data = require('./api/order/submit.json')
    res.json(data);
});
router.all('/polaris/order/orderFlowLog/:orderNo', function (req, res) {
    const data = require('./api/order/orderFlowLog.json')
    res.json(data);
});
router.all('/polaris/venus/discover', function (req, res) {
    const data = require('./api/venus/discover.json')
    res.json(data);
});
router.all('/polaris/venus/zfresult', function (req, res) {
    const data = require('./api/venus/zfresult.json')
    res.json(data);
});
/*字典*/

router.all('/base-server/dictionary/queryList', function (req, res) {
    const allData = require('./api/dictionary/queryList/all.json')
    let data = allData
    res.json(data);
});
router.all('/base-server/dictionary/getNextDictionaryList/AR:340000', function (req, res) {
    const AR340000 = require('./api/dictionary/getNextDictionaryList/AR340000.json')
    let data = AR340000
    res.json(data);
});

router.all('/base-server/dictionary/getNextDictionaryList/AR:340300', function (req, res) {
    const AR340300 = require('./api/dictionary/getNextDictionaryList/AR340300.json')
    let data = AR340300
    res.json(data);
});

router.all('/base-server/dictionary/getNextDictionaryList/AR:110000', function (req, res) {
    const AR110000 = require('./api/dictionary/getNextDictionaryList/AR110000.json')
    let data = AR110000
    res.json(data);
});

router.all('/base-server/dictionary/getNextDictionaryList/AR:110100', function (req, res) {
    const AR110100 = require('./api/dictionary/getNextDictionaryList/AR110100.json')
    let data = AR110100
    res.json(data);
});

router.all('/base-server/dictionary/getNextDictionaryList/AR:620000', function (req, res) {
    const AR620000 = require('./api/dictionary/getNextDictionaryList/AR620000.json')
    let data = AR620000
    res.json(data);
});

router.all('/base-server/dictionary/getNextDictionaryList/AR:620200', function (req, res) {
    const AR620200 = require('./api/dictionary/getNextDictionaryList/AR620200.json')
    let data = AR620200
    res.json(data);
});

router.all('/base-server/dictionary/getNextDictionaryList/AR:623000', function (req, res) {
    const AR623000 = require('./api/dictionary/getNextDictionaryList/AR623000.json')
    let data = AR623000
    res.json(data);
});

router.all('/base-server/dictionary/getNextDictionaryList/AR:350000', function (req, res) {
    const AR350000 = require('./api/dictionary/getNextDictionaryList/AR350000.json')
    let data = AR350000
    res.json(data);
});
router.all('/base-server/dictionary/getNextDictionaryList/AR:350900', function (req, res) {
    const AR350900 = require('./api/dictionary/getNextDictionaryList/AR350900.json')
    let data = AR350900
    res.json(data);
});

router.all('/base-server/dictionary/getNextDictionaryList/Al:a', function (req, res) {
    const ALa = require('./api/dictionary/getNextDictionaryList/ALa.json')
    let data = ALa
    res.json(data);
});

router.all('/base-server/dictionary/queryList/GP:QD180925010', function (req, res) {
    const GP_QD180925010 = require('./api/dictionary/queryList/GP_QD180925010.json')
    let data = GP_QD180925010
    res.json(data);
});

router.all('/base-server/dictionary/queryList/CE:QD180925010', function (req, res) {
    const CE_QD180925010 = require('./api/dictionary/queryList/CE_QD180925010.json')
    let data = CE_QD180925010
    res.json(data);
});

router.all('/base-server/dictionary/getOrganizationCategory', function (req, res) {
    const getOrganizationCategory = require('./api/dictionary/getOrganizationCategory.json')
    let data = getOrganizationCategory
    res.json(data);
});
router.all('/polaris/cache/insertMultiCache', function (req, res) {
    const data = require('./api/cache/insertMultiCache.json')
    res.json(data);
});
router.all('/polaris/cache/insertCache', function (req, res) {
    const data = require('./api/cache/insertCache.json')
    res.json(data);
});

/*纯json，无数据的*/
router.all('/polaris/test/getRepayList', function (req, res) {
    const data = require('./api/test/getRepayList.json')
    res.json(data);
});
router.all('/polaris/test/getCarSearchResList', function (req, res) {
    const data = require('./api/test/getCarSearchResList.json')
    res.json(data);
});

/**子帐号*/
router.all('/polaris/subaccount/query', function (req, res) {
    const data = require('./api/subaccount/query.json')
    res.json(data);
});
router.all('/polaris/subaccount/add', function (req, res) {
    const data = require('./api/subaccount/add.json')
    res.json(data);
});
router.all('/polaris/subaccount/disable', function (req, res) {
    const data = require('./api/subaccount/disable.json')
    res.json(data);
});
router.all('/polaris/subaccount/update', function (req, res) {
    const data = require('./api/subaccount/update.json')
    res.json(data);
});
router.all('/polaris/subaccount/sendShortMessage', function (req, res) {
    const data = require('./api/subaccount/sendShortMessage.json')
    res.json(data);
});


module.exports = router;
