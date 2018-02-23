let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let tweetSchema = new Schema({
  body: String,
  createdAt: { type: Date, default: Date.now },
  postedBy: String
});

let Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;
