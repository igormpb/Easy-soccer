const db = require('../../database/database');


module.exports = createUser = async (req, res) =>{

    // Serve para criar um time
    const { nameTeam, description, quantity, iduser} = req.body

    if( !nameTeam, !description, !quantity){
       return res.status(404).json({message: "os campos são obrigatórios "})
    }else{
            const sql = "INSERT INTO teams(nameTeam, description, quantity) VALUES (?,?,?)";
            await db.query(sql, [nameTeam, description, quantity], function(err,result){
                if (err) return console.log(err);
                
            })

            const sql1 = "select idTeam from teams where nameTeam = ? ";

            // Pega o id do time para atualizar os dados do user
            await db.query(sql1, [nameTeam], function(err,result){
                if (err) return console.log(err);            
                // tabela user na coluna team vai ser adicionado o id do time
                const idTeam = result[0].idTeam
            db.query(`UPDATE users SET team = ${idTeam} WHERE iduser = ${iduser}`,function(err,result){
                    if (err) return console.log(err);               
                    return res.status(200).json({ message: "time criado com sucesso" });
            })
            })

    }

       
}