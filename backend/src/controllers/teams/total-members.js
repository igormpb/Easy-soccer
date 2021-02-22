const db = require('../../database/database');

module.exports = totalMembers = async (req,res) =>{

const sql = `SELECT COUNT(fkteam) AS total FROM equip
WHERE fkteam = ?
`;
const {fkteam} = req.body;

await db.query(sql,[fkteam],function(err,result){
    
    if(err) console.log(err);

    res.json(result)

})
}