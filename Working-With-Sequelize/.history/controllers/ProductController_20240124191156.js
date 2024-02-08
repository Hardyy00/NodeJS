const { products } = require("./AdminController");

exports.getProducts = (req, res, next) => {
  res.render("shop", { products, title: "Shop", path: "/" });
};
