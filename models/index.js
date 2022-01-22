const Account = require('./Account');
const Category = require('./Category');
const Course = require('./Course');
const Location = require('./Location');
const User = require('./User');
const Age = require('./Age');

// Account.hasMany(Course, {
//     foreignKey: 'account_id',
//     constraints: false
// });

Course.belongsToMany(Location, {
  through: 'location_id',
  constraints: false,
});

Course.belongsToMany(Category, {
  through: 'category_id',
  constraints: false,
});

Course.belongsToMany(Age, {
  through: 'age_id',
  constraints: false,
});

module.exports = { User, Course, Account, Category, Location };
