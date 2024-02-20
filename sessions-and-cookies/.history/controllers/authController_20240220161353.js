const User = require("../Model/user");

exports.getLogin = (req, res) => {
  // const isAuthenticated = req.get("Cookie").split("=")[1];

  // console.log(req.session.user);
  // console.log(req.session);

  res.render("auth/login", {
    path: "/login",
    title: "Login",
    isAuthenticated: req.session.isLoggedIn,,
  });
};

exports.postLogin = async (req, res) => {
  req.session.user = await User.findById("65c9f787b2f8313231784993");
  req.session.isLoggedIn = true;

  res.redirect("/");
};

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/");
  });
};
