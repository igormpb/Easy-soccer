const db = require('../../database/database');


module.exports = create_user = async (req, res) =>{
    const { email, name, password, repeatPassword} = req.body

    if(!email, !name, !password, !repeatPassword){
        res.status(404).send({message: "os campos são obrigatórios "})
    }
    if(password != repeatPassword){
        res.status(404).send({message: "Senhas não são iguais "})
        
    }
    const sql = "INSERT INTO users(email,name,password,old) VALUES (?,?,?,17)";

    await db.query(sql, [email, name, password], function(err,result){
        if (err) return console.log(err);
        res.status(200).json({ message: "conta criada com sucesso" });
    })
}