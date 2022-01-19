const router = require('express').Router();

const userRoutes = require('./user-routes');
const courseRoutes = require('./course-routes');
const accountRoutes = require('./account-routes');

router.use('/users', userRoutes);
router.use('/courses', courseRoutes);
router.use('/accouts', accountRoutes);

module.exports = router;