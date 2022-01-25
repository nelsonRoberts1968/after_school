const router = require('express').Router();
const courseRoutes = require('./course-routes');
const userRoutes = require('./user-routes');
const accountRoutes = require('./account-routes');

router.use('/courses', courseRoutes);
router.use('/accounts', accountRoutes);
router.use('/users' , userRoutes);

module.exports = router;

