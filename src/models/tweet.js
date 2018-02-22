let mongoose = require('mongoose');
let Schema = mongoose.schema;

let tweetSchema = new Schema({
  body: String,
  createdAt: { type: Date, default: Date.now },
  postedBy: String
});
