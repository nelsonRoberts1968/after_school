const router = require('express').Router();
const courseRoutes = require('./course-routes');

router.use('/courses', courseRoutes);
// router.use('/accounts', accountRoutes);

module.exports = router;

