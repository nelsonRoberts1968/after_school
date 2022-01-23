
//Import the custom middleware
const withAuth = require('../utils/auth');
const sequelize = require('../config/connection');
const router = require('express').Router();
const { Account, Category, Course, Location, User, Age } = require('../models');

router.get('/courses', (req, res) => {
  res.render('courses');
});

//render new event page
// render homepage
router.get('/', async (req, res) => {
  if(req.session.loggedIn){
    res.render('homepage');
  }else{
    res.render('signup');
  }
});
//layout works
router.get('/submit', async (req, res) => {
  res.render('newEvent');
});

//Login with seession
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

router.get('./view/about', (req, res) => {
  res.render('main', { layout: 'about' });
const withAuth = require('./auth');


// render homepage
router.get('/', async (req, res) => {
  res.render('homepage');
});
//about
router.get('/about', async (req, res) => {
    res.render('about');
});
//login
router.get('/login', async (req, res) => {
    res.render('login');
});

router.get('/about',(req,res)=>{
  res.render('about');
});
//get all courses
router.get('/courses', async (req, res) => {
  try {
    const dbCourseData = await Course.findAll({
      include: [{ all: true, nested: true }],
    });
    dbCourseData.map((Course) => {
      Course.get({ plain: true });
    });
    res.render('courses');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET course by name
// Use the custom middleware before allowing the user to access the course
router.get('/courses/:id', withAuth, async (req, res) => {
  try {
    const dbCourseData = await Course.findByPk(req.params.id);

    const courses = dbCourseData.get({ plain: true });

    res.render('courses', { course, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
    try {
        const dbCourseData = await Course.findAll({ include: [{ all: true, nested: true }]});
        dbCourseData.map((Course) => {
            Course.get({ plain: true})
        });
        res.render('courses');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// GET course by name
// Use the custom middleware before allowing the user to access the course
// router.get('/courses/:title', withAuth, async (req, res) => {
//   try {
//     const dbCourseData = await Course.findByPk(req.params.id);

//     const courses = dbCourseData.get({ plain: true });

//     res.render('courses', { course, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });
//login
router.get('/featured', async (req, res) => {
    res.render('presentCourses');
});
module.exports = router;
