const router = require('express').Router();
const courseRoutes = require('./course-routes');
const accountRoutes = require('./account-routes');
const userRoutes = require('./user-routes');

router.use('/courses', courseRoutes);
router.use('/accounts', accountRoutes);
router.use('/users',userRoutes);
// router.use('/accounts', accountRoutes);

module.exports = router;

