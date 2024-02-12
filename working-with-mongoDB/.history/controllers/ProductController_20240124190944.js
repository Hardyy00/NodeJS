const { products } = require("./AdminController");

exports.getProducts = (req, res, next) => {
  const products = adminData.products;
  res.render("shop", { products, title: "Shop", path: "/" });
};
