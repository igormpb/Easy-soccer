const db = require('../../database/database');

module.exports = updateUser = async (req, res) =>{
    const {bio, name} = req.body;
    const {id} = req.params;
    if(!id) return res.json({message: "você precisa está conectado!"})
    const sql = "UPDATE USERS SET bio = ?, name = ? where iduser = ?";

    await db.query(sql,[bio,name,id],function(err,result){
        if(err) return console.log(err)
        return res.json({message: "atualizado com sucesso!"});
    })
}