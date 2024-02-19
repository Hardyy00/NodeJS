exports.getLogin = (req, res) => {
  console.log(req.get("Cookie").split("=")[1]);
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
