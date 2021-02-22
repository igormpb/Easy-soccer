const routes = require('express').Router();

routes.use('/api/users', require('./controllers/users/user-controller'));
routes.use('/api/teams', require('./controllers/teams/team-contoller'));

module.exports = routes;