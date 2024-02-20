const User = require("../Model/user");
const bcrypt = require("bcrypt");

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
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("No User found");
    }

    const result = await bcrypt.compare(password, user.password);

    console.log(result);

    if (!result) {
      return res.status(403).status("/login");
    }

    req.session.user = user;
    req.session.isLoggedIn = true;

    req.session.save(() => {
      res.redirect("/");
    });
  } catch (err) {
    res.status(404).render("404", {
      title: err.message,
      path: "/error",
      isAuthenticated: req.session.isLoggedIn,
    });
  }
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
    let user = await User.findOne({ email });

    if (user) {
      return res.redirect("/signup");
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    user = new User({ email, password: hashedPassword, cart: { items: [] } });
    await user.save();

    res.status(200).redirect("/login");
  } catch (err) {
    res.status(404).render("404", {
      title: err.message,
      path: "/error",
      isAuthenticated: req.session.isLoggedIn,
    });
  }
};
