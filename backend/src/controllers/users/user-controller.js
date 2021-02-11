const router = require('express').Router();
const createUser = require('./create-user');


router.post('/create',(req,res)=> createUser(req,res));


module.exports = router;