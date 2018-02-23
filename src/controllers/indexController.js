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

  renderSignUp(req, res) {
    res.render('register');
  },

  signOut(req, res) {
    req.logout();
    res.redirect('/');
  }

}
