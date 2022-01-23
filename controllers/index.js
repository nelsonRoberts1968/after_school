const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const signup = require('./signup');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/signup' , signup);


module.exports = router;
