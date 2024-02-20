exports.getLogin = (req, res) => {
  console.log(req.get("cookie"));
  res.render("auth/login", {
    path: "/login",
    title: "Login",
    isAuthenticated: req.isLoggedIn,
  });
};

exports.postLogin = (req, res) => {
  res.setHeader("Set-Cookie", "loggedIn=true");
  res.redirect("/");
};
