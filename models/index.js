const Account = require ('./Account');
const Category = require ('./Category');
const Course = require('./Course');
const Location = require ('./Location');
const User = require ('./User');

// Account.hasMany(Course, {
//     foreignKey: 'account_id',
//     constraints: false
// });

Course.belongsTo(Location, {
    foreignKey: 'location_id',
    constraints: false
});

Course.belongsTo(Category, {
    foreignKey: 'category_id',
    constraints: false
});

// Location.belongsTo(Course, {
//     foreignKey: 'course_id'
// });

// Category.belongsTo(Course, {
//     foreignKey: 'course_id'
// });

Location.hasMany(Course, {
    foreignKey: 'location_id',
    constraints: false
});

// Course.hasMany(Location, {
//     foreignKey: 'course_id'
// })

Category.hasMany(Course, {
    foreignKey: 'category_id',
    constraints: false
});

Course.hasMany(Category, {
    foreignKey: 'course_id'
});

// Course.belongsTo(Account, {
//     foreignKey: 'account_id',
//     constraints: false
// });


module.exports = { User, Course, Account, Category, Location };