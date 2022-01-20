const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Age extends Model {}

Age.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    age: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'age',
  }
);

module.exports = Age;
