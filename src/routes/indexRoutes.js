let express = require('express');
let indexRoutes = express.Router();
let User = require('../models/user');
let indexController = require('../controllers/indexController');

module.exports = function(passport) {

  indexRoutes.route('/')
    .get(indexController.renderIndex)

  indexRoutes.route('/login')
    .post(passport.authenticate('login', {
      successRedirect: '/home',
      failureRedirect: '/',
      failureFlash: true
    }));

  indexRoutes.route('/home')
    .get(indexController.isAuthenticated, indexController.renderHome);

  indexRoutes.route('/signup')
    .get(indexController.renderSignUp)
    .post(passport.authenticate('signup', {
      successRedirect: '/home',
      failureRedirect: '/signup',
      failureFlash: true
    }));

  return indexRoutes;
}
