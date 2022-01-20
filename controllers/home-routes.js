const router = require('express').Router();
const { Account, Category, Course, Location, User } = require('../models');

//Import the custom middleware
const withAuth = require('../utils/auth');

//render about us
router.get('./view/about', (req, res) => {
  res.render('main', { layout: 'about' });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/featured', (req, res) => {
  res.render('presentCourses');
});

// render homepage
router.get('/', async (req, res) => {
  res.render('homepage');
});

module.exports = router;
