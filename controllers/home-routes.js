const router = require('express').Router();
const sequelize = require('../config/connection');
const { Account, Category, Course, Location, User, Age } = require('../models');

//Import the custom middleware
const withAuth = require('../utils/auth');

// render homepage
router.get('/', async (req, res) => {
  res.render('homepage');
});

// router.get('/signup', async (req, res) => {
//   res.render('signup');
// });

router.get('/courses', (req, res) => {
  res.render('courses');
});

//render new event page
//layout works
router.get('/submit', async (req, res) => {
  res.render('newEvent');
});

module.exports = router;

// const router = require('express').Router();
// const sequelize = require('../config/connection');
// const {
//   Account,
//   Age,
//   Category,
//   Course,
//   CourseTag,
//   Location,
//   User,
// } = require('../models');

// //get all courses
// router.get('/', (req, res) => {
//   console.log('============');
//   Course.findAll({
//     attributes: [
//       'id',
//       'title',
//       'description',
//       'url',
//       'location_id',
//       'age_id',
//       'category_id',
//     ],
//     include: [
//       {
//         model: Location,
//         attributes: ['id', 'city'],
//       },
//       {
//         model: Age,
//         attributes: ['id', 'age'],
//       },
//       {
//         model: Category,
//         attributes: ['id', 'category_name'],
//       },
//     ],
//   })
//     .then((dbCourseData) => {
//       const courses = dbCourseData.map((course) => course.get({ plain: true }));

//       res.render('courses', {
//         courses,
//         loggedIn: req.session.loggedIn,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// // get single course
// router.get('/courses/:title', (req, res) => {
//   Course.findOne({
//     where: {
//       title: req.params.title,
//     },
//     attributes: [
//       'id',
//       'title',
//       'description',
//       'url',
//       'location_id',
//       'category_id',
//       'age_id',
//     ],
//     include: [
//       {
//         model: Location,
//         attributes: ['id', 'city'],
//       },
//       {
//         model: Category,
//         attributes: ['id', 'category'],
//       },
//       {
//         model: Age,
//         attributes: ['id', 'age'],
//       },
//     ],
//   })
//     .then((dbCourseData) => {
//       if (!dbCourseData) {
//         res.status(404).json({ message: 'No courses found by this name' });
//         return;
//       }

//       const course = dbCourseData.get({ plain: true });

//       res.render('courses', {
//         course,
//         loggedIn: req.session.loggedIn,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.get('/login', (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }
//   res.render('login');
// });

// module.exports = router;
