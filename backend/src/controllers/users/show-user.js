const db = require('../../database/database');

module.exports = showUser = async (req,res) =>{
const { id } = req.params;
const sql = "SELECT name,old,bio,team from users where iduser=?";
const sql1 = "SELECT name,old,bio,team,teams.nameTeam,teams.description FROM users INNER JOIN teams ON team = idTeam where iduser = ?";
await db.query(sql,[id], async function(err,result){
    if(err) console.log(err);
    if(result[0].team != 0){
        await db.query(sql1,[id],function(err,result){
         return res.json(result);
            
        })
    }else{
        return res.json(result);
    }
  
})
}