const router = require('express').Router();
const sequelize = require('../config/connection');
const { Account, Category, Course, Location } = require('../models');

// render homepage
router.get('/', async (req, res) => {
    res.render('homepage');
});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signup');
  //res.render('login');
});

module.exports = router;