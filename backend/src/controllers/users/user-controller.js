const router = require('express').Router();
const createUser = require('./create-user');
const loginUser = require('./login-user');

router.post('/create',(req,res)=> createUser(req,res));
router.post('/login',(req,res)=> loginUser(req,res));


module.exports = router;