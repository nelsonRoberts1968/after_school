const express = require('express');
const router = require('express').Router();
const excelController = require('../excel.controller');
const upload = require('../middlewares/upload');
// const Course = require('../../models/Course');

// router.post('/upload', upload.single('file'), excelController.upload);
// router.get('/courses', excelController.getCourses);

// router.use('api/excel', router);

module.exports = router;
