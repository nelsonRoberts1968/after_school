const router = require('express').Router();
const courseRoutes = require('./course-routes');

router.use('/courses', courseRoutes);

module.exports = router;

