const routes = require('express').Router();

routes.use('/api/users', require('./controllers/users/user-controller'));
module.exports = routes;