const router = require('express').Router();
const { Account, Category, Course, Location, User } = require('../models');

//Import the custom middleware
const withAuth = require('../utils/auth');

//render about us
router.get('./view/about', (req, res) => {
  res.render('main', { layout: 'about' });
});

// //get all courses
// router.get('/courses', async (req, res) => {
//   try {
//     const dbCourseData = await Course.findAll({
//       include: [
//         {
//           model: Course,
//           attributes: ['title', 'description', 'ages', 'location', 'url'],
//         },
//       ],
//     });

//     const courses = dbCourseData.map((course) => course.get({ plain: true }));
//     res.render('courses', {
//       courses,
//       // loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// // GET one course
// router.get('/courses/:id', async (req, res) => {
//   try {
//     const dbCourseData = await Course.findByPk(req.params.id, {
//       include: [
//         {
//           model: Course,
//           attributes: ['id', 'title', 'description', 'ages', 'location', 'url'],
//         },
//       ],
//     });

//     const course = dbCourseData.get({ plain: true });
//     res.render('courses', { course });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

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
