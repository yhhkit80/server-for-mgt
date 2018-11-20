// route.js
exports = module.exports = [{
    method: 'GET',
    path: '/api/user',
    impl: 'account.userById'
}, {
    method: 'POST',
    path: '/api/user',
    impl: 'account.createUser'
}, {
    method: 'GET',
    path: '/api/upload',
    impl: 'account.upload'
}];
