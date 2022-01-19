const sequelize = require('../config/connection');
const { Account, Course, Category, Location, User } = require('../models');

const accountSeedData = require('./accountSeedData.json');
const categorySeedData = require('./categorySeedData.json');
const locationSeedData = require('./locationSeedData.json');
const courseSeedData = require('./courseSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

await Account.bulkCreate(accountSeedData, {
    individualHooks: true,
    returning: true,
  });
  await Category.bulkCreate(categorySeedData, {
    individualHooks: true,
    returning: true,
  });
  await Location.bulkCreate(locationSeedData, {
    individualHooks: true,
    returning: true,
  });
  await course.bulkCreate(classSeedData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
