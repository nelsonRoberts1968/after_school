require('dotenv').config()
const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(process.env.JAWSDB_URL||{
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'juanjohn',
  //database: 'clubhubdb'
});

module.exports = db;