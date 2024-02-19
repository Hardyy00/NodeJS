exports.getLogin = (req, res) => {
  res.render("auth/login", {
    path: "/login",
    title: "Login",
    isAuthenticated: req.isLoggedIn,
  });
};

exports.postLogin = (req, res) => {
  res.setHeader();
  res.redirect("/");
};
