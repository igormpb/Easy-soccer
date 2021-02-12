const db = require('../../database/database');

module.exports = showUser = async (req,res) =>{
const { id } = req.params;
const sql = "SELECT name,old,bio from users where iduser=?";

db.query(sql,[id],function(err,result){
    if(err) console.log(err);
    return res.json(result);
})
}