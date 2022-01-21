const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Course, Age, Category, Location } = require('../../models');

//test to see if I can get it to return the data in a handlebar template. If it doesn't work, revert to below
router.get('/', async (req, res) => {
  Course.findAll({
    attributes: ['id', 'course_title', 'description', 'url'],
    include: [
      {
        model: Course,
        attributes: ['id', 'course_title', 'description', 'url'],
      },
    ],
  })
    .then((dbCourseData) => {
      // pass a single course object into the homepage template
      res.render('courses', dbCourseData.get({ plain: true }));
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// //returns course api DATA!!
// router.get('/', (req, res) => {
//   Course.findAll()
//     .then((dbCourseData) => res.json(dbCourseData))
//     .catch((err) => {
//       res.status(500).json(err);
//     });
// });

//GET /api/courses/1
router.get('/:id', (req, res) => {
  Course.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCourseData) => {
      if (!dbCourseData) {
        res.status(404).json({ message: 'No course found with this id' });
        return;
      }
      res.json(dbCourseData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//POST /api/courses
router.post('/', (req, res) => {
  Course.create({
    course_title: req.body.course_title,
    description: req.body.description,
    location_id: req.body.location_id,
    age_id: req.body.age_id,
    category_id: req.body.category_id,
    url: req.body.url,
  })
    .then((dbCourseData) => {
      res.json(dbCourseData);
      console.log(dbCourseData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//DELETE /api/courses/1
router.delete('/:id', (req, res) => {
  Course.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCourseData) => {
      if (!dbCourseData) {
        res.status(404).json({ message: 'no course found with this id' });
        return;
      }
      res.json(dbCourseData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
