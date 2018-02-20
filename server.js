const app = require('./src/app.js')

let port = process.env.PORT || 3000;

app.listen(port, (err) => {
  if(err) return console.log(err);

  console.log('Running api on port: ', port);
});
