let express = require('express');
let app = express();

app.get('/', (req, res) => {
  res.send('Hello, I got here');
})

module.exports = app;
