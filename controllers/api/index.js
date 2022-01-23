const router = require('express').Router();

const userRoutes = require('./user-routes');
const courseRoutes = require('./course-routes');
const accountRoutes = require('./account-routes');

router.use('/users', userRoutes);
router.use('/courses', courseRoutes);
<<<<<<< HEAD
router.use('/accounts', accountRoutes);
=======
router.use('/accouts', accountRoutes);
>>>>>>> Nedabranch

module.exports = router;