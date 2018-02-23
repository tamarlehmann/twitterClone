let express = require('express');
let tweetRoutes = express.Router();
let Tweet = require('../models/tweet');
let tweetController = require('../controllers/tweetController');

tweetRoutes.route('/')
  .get(tweetController.isAuthenticated, tweetController.renderTweets)
  .post(tweetController.postTweet);

module.exports = tweetRoutes;
