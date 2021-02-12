const router = require('express').Router();
const createUser = require('./create-user');
const loginUser = require('./login-user');
const showUser = require('./show-user');
const updateUser = require('./update-user');

router.post('/create',(req,res)=> createUser(req,res));
router.post('/login',(req,res)=> loginUser(req,res));
router.get('/:id',(req,res)=> showUser(req,res));
router.put('/edit/:id',(req,res)=> updateUser(req,res));




module.exports = router;