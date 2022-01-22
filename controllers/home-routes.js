const router = require('express').Router();
const sequelize = require('../config/connection');
const { Account, Category, Course, Location } = require('../models');

// render homepage
router.get('/', async (req, res) => {
  if(req.session.loggedIn){
    res.render('homepage');
  }else{
    res.render('login');
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/signup',(req, res) => {
  res.render('signup');
});

module.exports = router;