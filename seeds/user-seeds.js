const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: "nelsontest",
    email: "nelsontest0@test.com",
    password: "password123"
  },
  {
    username: "superuser",
    email: "superuser0@test.com",
    password: "password123"
  },
  {
    username: "testuser1",
    email: "testuser10@test.com",
    password: "password123"
  },
  {
    username: "testuser2",
    email: "testuser20@test.com",
    password: "password123"
  },
  {
    username: "testuser3",
    email: "testuser30@test.com",
    password: "password123"
  }
];


const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;


