

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
 //
//Loggin user post request
router.post('/login', (req, res) => {
    // expects {email: 'lernantino@gmail.com', password: 'password1234'}
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(dbUserData => {
      if (!dbUserData) {
        res.status(400).json({ message: 'No user with that email address!' });
        return;
      }
  
      const validPassword = dbUserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
    
        res.json({ user: dbUserData, message: 'You are now logged in!' });
      });
    });
  });

// route for user signup
router.get('/signup',(req, res) => {
        res.render('signup');
    });
    router.post((req, res) => {
        User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        .then(user => {
            req.session.user = user.dataValues;
            res.redirect('/');

        })
        .catch(error => {
            res.redirect('/');
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