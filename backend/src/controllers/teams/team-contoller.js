
const router = require('express').Router();

const createTeam = require('./create-team');
const showTeams = require('./show-teams');
const totalMembers = require('./total-members');

router.use("/list",(req,res)=> showTeams(req,res));
router.use("/members",(req,res)=> totalMembers(req,res));
router.use("/create",(req,res)=> createTeam(req,res));


module.exports = router;