exports.getLogin = (req, res) => {
  // const isAuthenticated = req.get("Cookie").split("=")[1];
  console.log(req.session);
  res.render("auth/login", {
    path: "/login",
    title: "Login",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.postLogin = (req, res) => {
  res.redirect("/login");
};
