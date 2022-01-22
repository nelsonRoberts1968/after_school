const router = require('express').Router();
const { Account, Category, Class, Location, User } = require('../models');

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);



module.exports = router;
