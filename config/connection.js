const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize('clubhubdb', 'root', 'password', {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });

