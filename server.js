
const db = require('./db/connection');
const path = require('path');
const dotenv = require('dotenv');
const express = require('express');
const signup_route = require('./routes/signup');
const home_route = require('./routes/homePage');
const auth_route = require('./routes/auth');
const session = require('express-session');
const exphbs = require('express-handlebars');
const app = express();



const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

//parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

dotenv.config({path: './.env'});
const PORT = process.env.PORT || 3001;


// const sequelize = require("./config/connection");
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// app.use(session(sess));

// const helpers = require('./utils/helpers');


//use apiRoutes 
app.use(home_route);
//Signup route
app.use(signup_route);
//Authentication for all forms
app.use(auth_route);

const hbs = exphbs.create({  });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

// sequelize.sync({ force: false }).then(() => {//
//start server after DB Connection
db.connect(err =>{
    if(err)throw err;
    console.log('Database Connected');
 app.listen(PORT, () => console.log('Now listening'));
});
 // render about.handlebars
// app.get('./view/about', (req, res) => {
        
//         res.render('main', {layout: 'about'});
//     });
       
