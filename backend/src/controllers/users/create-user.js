const db = require('../../database/database');


module.exports = createUser = async (req, res) =>{

    const { email, name, password, repeatPassword} = req.body

    if(!email, !name, !password, !repeatPassword){
        res.status(404).send({message: "os campos são obrigatórios "})
    }
    if(password != repeatPassword){
        res.status(404).send({message: "Senhas não são iguais "})
    }

    await db.query(`SELECT email from users where email="${email}"`, async function(err,results){
        if (err) return console.log(err);
        if(results[0]){
           return res.json({message: "Email já cadastrado"})
        }else{
            const sql = "INSERT INTO users(email,name,password,old) VALUES (?,?,?,17)";

         await db.query(sql, [email, name, password], function(err,result){
            if (err) return console.log(err);
            return res.status(200).json({ message: "conta criada com sucesso" });
        })
        }
        
    })
    
}