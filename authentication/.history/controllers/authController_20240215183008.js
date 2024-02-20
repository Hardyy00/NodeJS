exports.getLogin = (req, res) => {
  res.render("auth/login", {
    path: "/order",
  });
};
