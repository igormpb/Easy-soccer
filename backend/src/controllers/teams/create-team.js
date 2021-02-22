const db = require('../../database/database');


module.exports = createUser = async (req, res) =>{

    const { nameTeam, description, quantity} = req.body

    if( !nameTeam, !description, !quantity){
        res.status(404).send({message: "os campos são obrigatórios "})
    }

        const sql = "INSERT INTO teams(nameTeam, description, quantity) VALUES (?,?,?)";

         await db.query(sql, [nameTeam, description, quantity], function(err,result){
            if (err) return console.log(err);
            return res.status(200).json({ message: "time criado com sucesso" });
        })

}