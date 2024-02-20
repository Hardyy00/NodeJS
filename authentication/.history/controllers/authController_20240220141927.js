const User = require("../Model/user");

exports.getLogin = (req, res) => {
  // const isAuthenticated = req.get("Cookie").split("=")[1];

  // console.log(req.session.user);
  // console.log(req.session);

  console.log(req.session.user);
  res.render("auth/login", {
    path: "/login",
    title: "Login",
    isAuthenticated: req.session.user,
  });
};

exports.postLogin = async (req, res) => {
  req.session.user = await User.findById("65c9f787b2f8313231784993");

  res.redirect("/login");
};
