
<<<<<<< HEAD
=======
const db = require('./config/connection');
>>>>>>> Nedabranch
const path = require('path');
const express = require('express');
<<<<<<< HEAD
=======
const signup_route = require('./controllers/signup');
const home_route = require('./controllers/home-routes');
const auth_route = require('./controllers/auth');
>>>>>>> Nedabranch
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize') (session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
<<<<<<< HEAD
=======

//use apiRoutes 
app.use(home_route);
//Signup route
app.use(signup_route);
//Authentication for all forms
app.use(auth_route);

const hbs = exphbs.create({  });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

//parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

dotenv.config({path: './.env'});
>>>>>>> Nedabranch
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {}, 
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

<<<<<<< HEAD
app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
=======
const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// const helpers = require('./utils/helpers');

app.use(require('./controllers/'));
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
    sequelize.sync({ force: false });
  });
// sequelize.sync({ force: false }).then(() => {//
//start server after DB Connection
db.connect(err =>{
    if(err)throw err;
    console.log('Database Connected');
 app.listen(PORT, () => console.log('Now listening'));
>>>>>>> Nedabranch
});
