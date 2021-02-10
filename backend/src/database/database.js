const mysql = require('mysql')
const config = require('./database-config')


const connection = mysql.createConnection({
    host: 'localhost',
    database: 'test',
    user: 'root',
    password: '',
})

connection.connect(function(err) {
    if (err) console.log(err);
    console.log("Connected!");
  });


module.exports = connection;