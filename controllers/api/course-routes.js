const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Course, Age, Category, Location } = require('../../models');


// //returns all courses as object /api/courses
router.get('/', (req, res) => {
  Course.findAll()
    .then((dbCourseData) => res.json(dbCourseData))
    .catch((err) => {
      res.status(500).json(err);
    });
});

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
// const express = require('express');
// const excelController = require('../excel.controller');
// const upload = require('../middlewares/upload');
// // const Course = require('../../models/Course');

// // router.post('/upload', upload.single('file'), excelController.upload);
// // router.get('/courses', excelController.getCourses);

// // router.use('api/excel', router);
// const Course = require('../../models/Course');


module.exports = router;
