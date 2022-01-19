

const router = require('express').Router();
const { Account, Category, Course, Location, User } = require('../models');

//Import the custom middleware
const withAuth = require('../utils/auth');


// render homepage
router.get('/', async (req, res) => {
    res.render('homepage');
});

router.get('/login',(req, res) =>{
    res.render('login');
})
    router.post((req, res) => {
        var username = req.body.username,
            password = req.body.password;
    
        User.findOne({ where: { username: username } }).then(function (user) {
            if (!user) {
                res.redirect('/login');
                res.render('login');
            } else if (!user.validPassword(password)) {
                res.redirect('/signup');
                res.render('signup');
            } else {
                req.session.user = user.dataValues;
                res.redirect('/');
            }
        });
    });

   

// route for user signup
router.get('/signup',(req, res) => {
        //res.sendFile(__dirname + '/public/signup.html');
        res.render('signup', hbsContent);
    })
    .post((req, res) => {
        User.create({
            username: req.body.username,
            //email: req.body.email,
            password: req.body.password
        })
        .then(user => {
            req.session.user = user.dataValues;
            res.redirect('/');
        })
        .catch(error => {
            res.redirect('/signup');
        });
    });

//get all courses
router.get('/courses', async (req, res) => {
    try {
        const dbCourseData = await Course.findAll({ include: [{ all: true, nested: true }]});
        dbCourseData.map((Course) => {
            Course.get({ plain: true})
        });
        res.render('courses');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


//GET course by name
//Use the custom middleware before allowing the user to access the course
// router.get('/courses/:title', withAuth, async (req, res) => {
//   try {
//     const dbCourseData = await Course.findByPk(req.params.id);

//     const courses = dbCourseData.get({ plain: true });

//     res.render('courses', { course, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

module.exports = router;