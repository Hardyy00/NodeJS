exports.getLogin = (req, res) => {
  // const isAuthenticated = req.get("Cookie").split("=")[1];
  res.render("auth/login", {
    path: "/login",
    title: "Login",
  });
};

exports.postLogin = (req, res) => {
  req.session();
  res.redirect("/");
};
