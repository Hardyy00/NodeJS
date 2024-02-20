exports.getLogin = (req, res) => {
  const isAuthenticated = req.get("Cookie").split("=")[1];
  res.render("auth/login", {
    path: "/login",
    title: "Login",
    isAuthenticated,
  });
};

exports.postLogin = (req, res) => {
  res.setHeader("Set-Cookie", "loggedIn=true");
  res.redirect("/");
};
