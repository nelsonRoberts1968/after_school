
//Import the custom middleware
const withAuth = require('../utils/auth');
const sequelize = require('../config/connection');
const router = require('express').Router();
const { Account, Category, Course, Location, User, Age } = require('../models');


//temporary disable homerout signup logic
router.get('/',(req, res) => {
  console.log("here it is");
  console.log(req.session.loggedIn);
  if(req.session.loggedIn){
    
    res.render('homepage');
  }else{
    res.render('signup');
  }
});

//Signup
router.get('/signup',(req, res) => {
  res.render('signup');
});

router.get('/courses', (req, res) => {
  res.render('courses');
});

//render new event page
router.get('/submit', async (req, res) => {
  res.render('newEvent');
});


router.get('./view/about', (req, res) => {
  res.render('main', { layout: 'about' });
});

//login
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
  }else{
  res.render('login');
  }
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

router.get('/featured',(req, res) => {
    res.render('presentCourses');
});
module.exports = router;
