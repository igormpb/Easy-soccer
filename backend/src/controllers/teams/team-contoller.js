
const router = require('express').Router();

const createTeam = require('./create-team');
const showTeams = require('./show-teams');
const totalMembers = require('./total-members');
const joinTeam = require('./join-team');
const Myteam = require('./my-team');

router.use("/list",(req,res)=> showTeams(req,res));
router.use("/create",(req,res)=> createTeam(req,res));
router.use("/join",(req,res)=> joinTeam(req,res));
router.use("/members/:id",(req,res)=> Myteam(req,res));


module.exports = router;