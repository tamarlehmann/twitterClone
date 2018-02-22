let express = require('express');
let indexRoutes = express.Router();
let User = require('../models/user');
let indexController = require('../controllers/indexController')

indexRoutes.route('/')
  .get(indexController.renderIndex);

indexRoutes.route('/home')
  .get(indexController.renderHome);

module.exports = indexRoutes;
