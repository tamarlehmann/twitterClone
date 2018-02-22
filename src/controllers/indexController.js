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

  renderHome(req, res) {
    res.render('home');
  },

  renderSignUp(req, res) {
    res.render('register');
  }

}
