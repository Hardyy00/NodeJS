const User = require("../Model/user");

exports.getLogin = (req, res) => {
  // const isAuthenticated = req.get("Cookie").split("=")[1];

  // console.log(req.session.user);
  // console.log(req.session);

  res.render("auth/login", {
    path: "/login",
    title: "Login",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.postLogin = async (req, res) => {
  req.session.user = await User.findById("65c9f787b2f8313231784993");
  req.session.isLoggedIn = true;

  req.session.save(() => {
    res.redirect("/");
  });
};

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    }
    res.redirect("/");
  });
};

exports.getSignup = (req, res) => {
  res.render("auth/signup", {
    path: "/signup",
    title: "Signup",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.postSignup = async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) {
      return res.redirect("/signup");
    }

    user = new User({ email, password, cart: { items: [] } });
    await user.save();

    res.redirect("/login");
  } catch (err) {
    res.render("/");
  }
};
