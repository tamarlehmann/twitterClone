let Tweet = require('../models/tweet');

module.exports = {

  isAuthenticated(req, res, next) {
    if (req.isAuthenticated())
    return next();
    console.log('not authenticated yet');
    res.redirect('/');
  },

  renderTweets(req, res){
    let tweetList;
    Tweet.find()
    .exec()
    .then(tweets => {
      tweetList = tweets;
      res.render('home', { user: req.user.username,
                          tweets: tweetList});
    })
    .catch(() => console.log("failure"))
  },

  postTweet(req, res){
    let tweet = {
      body: req.body.tweet_body,
      postedBy: req.user.username
    }

    Tweet.create(tweet)
      .then(res.redirect('/tweets'))
      .catch(err => {
        res.status(500);
        res.send(err);
      });
  }

}
