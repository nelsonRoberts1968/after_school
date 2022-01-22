const router = require('express').Router();
<<<<<<< HEAD
const { Account, Category, Course, Location, User, Age } = require('../models');


//Import the custom middleware
const withAuth = require('../utils/auth');

=======
const sequelize = require('../config/connection');
const { Account, Category, Course, Location } = require('../models');
>>>>>>> 57d927f ( fixed loging and signup routes)

//render new event page
//layout works
router.get('/submit', async (req, res) => {
  res.render('newEvent');
});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signup');
  //res.render('login');
});

<<<<<<< HEAD
// render homepage
router.get('/', async (req, res) => {
  res.render('homepage');
});

module.exports = router;
=======
module.exports = router;
>>>>>>> 57d927f ( fixed loging and signup routes)
