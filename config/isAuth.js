const isAuth = (req, res, next) => {
  if (req.session.user) {
    return next();
  }
  req.flash("error-msg", "please login first");
  res.redirect("/login");
};

module.exports = isAuth;
