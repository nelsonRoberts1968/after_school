const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Course extends Model {}

Model.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    course_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },
    description: {
      type: DataTypes.STRING,
    },
    location_id: {
      type: DataTypes.STRING,
      references: {
        model: 'location',
        key: 'id',
      },
    },
    category_id: {
      type: DataTypes.STRING,
      references: {
        model: 'category',
        key: 'id',
      },
    },
    age_id: {
      type: DataTypes.STRING,
      references: {
        model: 'age',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'course',
  }
);

module.exports = Course;
