let express = require('express');
let indexRoutes = express.Router();
let User = require('../models/user');
let indexController = require('../controllers/indexController');

module.exports = function(passport) {

  indexRoutes.route('/')
    .get(indexController.renderIndex)

  indexRoutes.route('/login')
    .post(passport.authenticate('login', {
      successRedirect: '/tweets',
      failureRedirect: '/',
      failureFlash: true
    }));

  indexRoutes.route('/signup')
    .get(indexController.renderSignUp)
    .post(passport.authenticate('signup', {
      successRedirect: '/tweets',
      failureRedirect: '/signup',
      failureFlash: true
    }));

  indexRoutes.route('/signout')
    .get(indexController.signOut);

  return indexRoutes;
}
