
//Import the custom middleware
const withAuth = require('../utils/auth');
const sequelize = require('../config/connection');
const router = require('express').Router();
const { Account, Category, Course, Location, User, Age } = require('../models');

router.get('/courses', (req, res) => {
  res.render('courses');
});

//render new event page
router.get('/submit', async (req, res) => {
  res.render('newEvent');
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

// render homepage
router.get('/', async (req, res) => {
  res.render('homepage');
});

router.get('/about',(req,res)=>{
  res.render('about');
});
module.exports = router;
