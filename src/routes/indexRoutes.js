let express = require('express');
let indexRoutes = express.Router();
let User = require('../models/user');

var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  console.log('not authenticated yet');
  res.redirect('/');
}

indexRoutes.route('/')
  .get((req, res) => {
    res.render('index');
  });

indexRoutes.route('/home')
  .get(isAuthenticated, (req, res) => {
    res.send('hello there')
  })

module.exports = indexRoutes;
