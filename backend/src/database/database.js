const mysql = require('mysql')
const config = require('./database-config')


const connection = mysql.createConnection({
    host: 'localhost',
    database: 'easysoccer',
    user: 'root',
    password: '',
})

connection.connect(function(err) {
    if (err) return console.log(err);
    console.log("Connected!");
  });


module.exports = connection;