const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Course extends Model {}

Model.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING
    },
    ages: {
      type: DataTypes.STRING
    },
    url: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    location_id: {
      type: DataTypes.STRING
    },
      category_id: {
        type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'course',
  }
);

module.exports = Course;
