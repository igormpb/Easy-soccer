const db = require('../../database/database');

module.exports = joinTeam = async (req,res) =>{
const { iduser, idTeam } = req.body;
const sql = "UPDATE users set team = ? WHERE iduser = ?";
await db.query(sql,[idTeam,iduser],function(err,result){
    if(err) console.log(err);
    return res.json({message: "Entrou no time"});
})
}