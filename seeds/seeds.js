const sequelize = require('../config/connection');
const { Course } = require('../models');

const courseSeedData = require('./courseSeedData.json');
const userSeedData = require('./userSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Course.bulkCreate(courseSeedData, {
    individualHooks: true,
    returning: true,
  });
  await User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true,
  });
    
  await Location.bulkCreate(locationSeedData, {
    individualHooks: true,
    returning: true,
  });
  await Course.bulkCreate(courseSeedData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();

