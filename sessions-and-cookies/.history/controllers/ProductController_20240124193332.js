const { products } = require("./AdminController");

exports.getProducts = (req, res, next) => {
  const product = res.render("shop", { products, title: "Shop", path: "/" });
};
