const Sequelize = require('sequelize');
require('dotenv').config();

// Connect to database
const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'password',
  database: 'clubhubdb'
});

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  console.log(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD);
  sequelize = new Sequelize(
   "clubhubdb",
    "root",
    "password",
    // process.env.DB_NAME,
    // process.env.DB_USER,
    // process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    }
  );
};

module.exports = sequelize;
