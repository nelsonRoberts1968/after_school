
const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'Magjo09iY7&r',
  database: 'clubhubdb'
});

module.exports = db;