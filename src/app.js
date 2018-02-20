let express = require('express');
let mongoose = require('mongoose');
let path = require('path');
let User = require('./models/user');
let indexRoutes = require('./routes/indexRoutes');

let app = express();

// Configuring db connection
let db = mongoose.connect('mongodb://localhost:27017/twitter-clone', (err) => {
  if(err) return console.log(err);

  console.log('mongoose connected');
});

// Set view engine to EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

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

app.use('/', indexRoutes);

// app.get('/', (req, res) => {
//   // res.send('Hello, I got here');
//   User.find({}, (err, users) => {
//     if (err) return console.log(err);
//
//     res.send(users);
//   })
// })

module.exports = app;
