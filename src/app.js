let express = require('express');
let mongoose = require('mongoose');
let path = require('path');
let User = require('./models/user');
let bodyParser = require('body-parser');


let app = express();


// Configuring db connection
let db = mongoose.connect('mongodb://localhost:27017/twitter-clone', (err) => {
  if(err) return console.log(err);

  console.log('mongoose connected');
});

// Set view engine to EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuring Passport
let passport = require('passport');
let expressSession = require('express-session');
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());

// Using the flash middleware provided by connect-flash to store messages in session
// and displaying in templates
let flash = require('connect-flash');
app.use(flash());

// Initialize Passport
var initPassport = require('./passport/init');
initPassport(passport);

// Define routers
let indexRoutes = require('./routes/indexRoutes')(passport);
app.use('/', indexRoutes);

let tweetRoutes = require('./routes/tweetRoutes');
app.use('/tweets/', tweetRoutes);

module.exports = app;
