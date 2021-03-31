const Controller = require('../controllers/controller.js');
const {authorise} = require('../untils')

module.exports = (server) => {
    server.get('', authorise.isAuthen, Controller.queryData);
    server.get('/testget',authorise.isAuthen, Controller.queryDatatestget);
    server.post('/testpost',authorise.isAuthen, Controller.queryDatatestpost);
    
}