const db = require('../../database/database');


module.exports = Myteam = async (req, res) =>{

    const {id} = req.params

    if(!id) return res.json({message: "jogador não existe!"});

    const sqluser = "SELECT team FROM users WHERE iduser = ?"
    await db.query(sqluser,[id], async function(err,result){
        const team = result[0].team;
        const sqlteam = "SELECT name FROM users WHERE team = ?"
       await db.query(sqlteam,[team], async function(err, members){
            db.query("SELECT nameTeam,description FROM teams WHERE idTeam = ?",[team], function(err, resTeam){
                return res.json({members, resTeam})
            })
        })
    })
}