exports.getLogin = (req, res) => {
  res.render("auth/login", {
    path: "/login",
    title: "Login",
  });
};

exports.postLogin = (req, res) => {
  res.render("/");
};
