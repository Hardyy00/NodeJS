exports.error = (req, res) => {
  // __dirname will give : path to current directory , here it is root folder
  // res.status(404).sendFile(path.join(__dirname, "views", "error-page.html"));

  res.status(404).render("404", {
    title: "404 Page Not Found",
    path: "/error",
    isAuthenticated: req.session.user != null,
  });
};
