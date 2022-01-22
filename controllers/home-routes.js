const router = require('express').Router();
const { Account, Category, Course, Location, User, Age } = require('../models');


//Import the custom middleware
const withAuth = require('../utils/auth');


//render new event page
//layout works
router.get('/submit', async (req, res) => {
  res.render('newEvent');
});

router.get('/courses', async (req, res) => {
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

// render homepage
router.get('/', async (req, res) => {
  res.render('homepage');
});

module.exports = router;
