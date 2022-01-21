const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CourseTag extends Model {}

CourseTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // define course_id column
    course_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'course',
        key: 'id',
      },
    },
    // define category_id column
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      },
    },
    // define location_id column
    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'location',
        key: 'id',
      },
    },
    // define age_id column
    age_id: {
      type: DataTypes.INTEGER,
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
    modelName: 'courseTag',
  }
);

module.exports = CourseTag;
