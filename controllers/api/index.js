const express = require('express');
const router = require('express').Router();

//create routes
const categoryRoutes = require('./category-routes');
const locationRoutes = require('./location-routes');
const ageRoutes = require('./age-routes');
const courseRoutes = require('./course-routes');
// const courseTagRoutes = require('./courseTag-routes');

//use routes
router.use('/categories', categoryRoutes);
router.use('/courses', courseRoutes);
router.use('/locations', locationRoutes);
router.use('/ages', ageRoutes);
// router.use('/search', courseTagRoutes);

module.exports = router;