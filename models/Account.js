const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection');

class Account extends Model {}

Model.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  location: {
      type: DataTypes.STRING,
  },
  ages: {
      type: DataTypes.STRING,
  },
  category: {
    type: DataTypes.STRING,
  },
  username: {
      type: DataTypes.STRING,
  },
  password: {
      type: DataTypes.STRING,
  }
},
  {
      sequelize,
      timestamps: true,
      freezeTableName: true,
      underscored: true,
      modelName: 'account'

  }
);

module.exports = Account;
