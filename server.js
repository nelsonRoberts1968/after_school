const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const user = require('./models/User');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize') (session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  //will allow tracking of logged in user accross sessions
  //key:'user_sid',
  secret: 'Super secret secret',
  cookie: {
    expires:600000
  }, 
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// // This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// // This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
// app.use((req, res, next) => {
//   if (req.cookies.user_sid && !req.session.user) {
//     //  res.clearCookie('user_sid');  
//     console.log("All cookie have been cleared");      
//   }
//   next();
// });

// const handlebarsContent = {userName:'', loggedin:false, title:"You are not logged in at the moment", body:""}
// // middleware function to check for logged-in users
// var sessionChecker = (req, res, next) => {
//   if (req.session.user && req.cookies.user_sid) {
//   //will have to rename the hoempage to dasboard or chnage this route logic
//       res.redirect('/dashboard');
//   } else {
//       next();
//   }    
// };
// // route for Home-Page--if user not logged in take them to log in
// app.get('/', sessionChecker, (req, res) => {
//   res.redirect('/login');
// });




// // route for user's info page once loged in
// app.get('/dashboard', (req, res) => {
//   if (req.session.user && req.cookies.user_sid) {
//   hbsContent.loggedin = true; 
//   hbsContent.userName = req.session.user.username; 
//   //console.log(JSON.stringify(req.session.user)); 
//   console.log(req.session.user.username); 
//   hbsContent.title = "You are logged in"; 
//       //res.sendFile(__dirname + '/public/dashboard.html');
//       res.render('index', hbsContent);
//   } else {
//       res.redirect('/login');
//   }
// });


// // route for user logout
// app.get('/logout', (req, res) => {
//   if (req.session.user && req.cookies.user_sid) {
//   hbsContent.loggedin = false; 
//   hbsContent.title = "You are logged out!"; 
//      // res.clearCookie('user_sid');
//   console.log(JSON.stringify(hbsContent)); 
//       res.redirect('/');
//   } else {
//       res.redirect('/login');
//   }
// });


// // route for handling 404 requests(unavailable routes)
// app.use(function (req, res, next) {
//   res.status(404).send("Sorry can't find that!")
// });

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// initialize body-parser to parse incoming parameters requests to req.body
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});