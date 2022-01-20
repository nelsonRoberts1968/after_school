const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Account, Age, Category, Course, CourseTag, Location, User} = require('../../models');
// const excelController = require('../excel.controller');
// const upload = require('../middlewares/upload');
const withAuth = require('../../utils/auth');

//get all courses
router.get('/', (req, res) => {
    //find all courses
    Course.findAll({
      attributes: [
        'id',
        'title',
        'description',
        'url',
        'category_id',
        'location_id',
        'age_id',
      ],
      include: [
        {
          model: Category,
          attributes: ['id', 'category_name'],
        },
        {
          model: Location,
          attributes: ['id', 'city'],
        },
        {
          model: Age,
          attributes: ['id', 'age'],
        },
      ],
    });
});

// get one course
router.get('/:id', (req, res) => {
  // find a single course by its `id`
  Course.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      'id',
      'title',
      'description',
      'url',
      'category_id',
      'location_id',
      'age_id',
    ],
    include: [
      {
        model: Category,
        attributes: ['id', 'category_name'],
      },
      {
        model: Location,
        attributes: ['id', 'city'],
      },
      {
        model: Age,
        attributes: ['id', 'age'],
      },
    ],
  })
    .then((dbCourse) => {
      if (!dbCourse) {
        res.status(404).json({ message: 'Course id does not exist' });
        return;
      }
      res.json(dbCourse);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//post a new course
router.post('/', withAuth, (req, res) => {
  Course.create({
    title: req.body.title,
    description: req.body.description,
    url: req.session.url,
    location: req.session.location_id,
    category: req.session.category_id,
    age: req.session.age_id,
  })
    .then((dbCourseData) => res.json(dbCourseData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
  Course.update(
    {
      title: req.body.title,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
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

router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Course.destroy({
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


module.exports = router;
