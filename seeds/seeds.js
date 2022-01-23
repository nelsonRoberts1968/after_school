const sequelize = require('../config/connection');
const { Course } = require('../models');

const courseSeedData = require('./courseSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Course.bulkCreate(courseSeedData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
