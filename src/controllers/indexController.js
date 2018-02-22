module.exports = {

  isAuthenticated(req, res, next) {
    if (req.isAuthenticated())
    return next();
    console.log('not authenticated yet');
    res.redirect('/');
  },

  renderIndex(req, res) {
    res.render('index');
  },

  renderHome(isAuthenticated, req, res) {
    res.send('hello there')
  }


}
