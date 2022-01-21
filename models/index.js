//import models
const Account = require('./Account');
const Category = require('./Category');
const Course = require('./Course');
const Location = require('./Location');
const User = require('./User');
const Age = require('./Age');
const CourseTag = require('./CourseTag');

//create associations

Course.belongsTo(Category, {
  foreignKey: 'category_id',
});

Category.hasMany(Course, {
  foreignKey: 'category_id',
});

Course.belongsToMany(Location, {
  through: CourseTag,
  foreignKey: 'course_id',
});

Location.belongsToMany(Course, {
  through: CourseTag,
  foreignKey: 'courseTag_id',
});

Age.belongsToMany(Course, {
  through: CourseTag,
  foreignKey: 'courseTag_id',
});

Course.belongsToMany(Age, {
  through: CourseTag,
  foreignKey: 'course_id',
});

Category.belongsToMany(Course, {
  through: CourseTag,
  foreignKey: 'courseTag_id',
});
Course.belongsToMany(Category, {
  through: CourseTag,
  foreignKey: 'course_id',
});

Location.belongsToMany(Course, {
  through: CourseTag,
  foreignKey: 'courseTag_id',
});
Course.belongsToMany(Location, {
  through: CourseTag,
  foreignKey: 'course_id',
});

Location.belongsToMany(Course, {
  through: CourseTag,
  foreignKey: 'courseTag_id',
});

CourseTag.belongsToMany(Course, {
  through: CourseTag,
  foreignKey: 'course_id',
});

CourseTag.belongsToMany(Course, {
  through: CourseTag,
  foreignKey: 'courseTag_id',
});

module.exports = { User, Course, Account, Category, Location, Age,CourseTag,
};
