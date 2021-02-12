const db = require('../../database/database');

module.exports = login_user = async (req, res) =>{

    const {email, password} = req.body;

    if(!email || !password){
        return res.json({message: "Os campos são obrigatórios!"});
    }

    const sql = "SELECT email, password, name from users where email=?"

    await db.query(sql,[email],function(err,result){
        
        if(result < 1) return res.json({message: "senha incorreta!"});
        if(result[0].password == password){
            return res.json({auth: true, name: result[0].name})
        }
        
    })
}