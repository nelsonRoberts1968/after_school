const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  console.log(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD);
  sequelize = new Sequelize(
   "clubhubdb",
    "root",
    "",
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
