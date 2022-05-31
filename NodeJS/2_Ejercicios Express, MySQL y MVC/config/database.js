const mysql = require('mysql2');
require('dotenv').config()
 
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : process.env.DB_PASS,
  database:'expressDB'
});

db.connect();

module.exports = db;