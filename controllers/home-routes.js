const router = require('express').Router();
const sequelize = require('../config/connection');
const { Account, Category, Course, Location, User, Age } = require('../models');

//Import the custom middleware
const withAuth = require('../utils/auth');

// router.get('/signup', async (req, res) => {
//   res.render('signup');
// });

//render new event page
//layout works
router.get('/submit', async (req, res) => {
  res.render('newEvent');
});

// render homepage
router.get('/', async (req, res) => {
  res.render('homepage');
});

module.exports = router;
