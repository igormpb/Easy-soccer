const db = require('../../database/database');

module.exports = showTeams = async (req,res) =>{

const sql = `SELECT nameTeam,quantity,description FROM teams ORDER BY nameTeam
`;

await db.query(sql, async function(err,result){
    if(err) console.log(err);
    res.json(result)
})
}