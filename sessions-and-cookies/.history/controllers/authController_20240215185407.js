exports.getLogin = (req, res) => {
  res.render("auth/login", {
    path: "/login",
    title: "Login",
  });
};

exports.postLogin = (req, res) => {
  req.isLoggedIn = true;
  res.redirect("/", { isAuthenticated: req.isLoggedIn });
};
