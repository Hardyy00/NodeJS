const Product = require("../Model/product");

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll();
  res.render("shop", { products, title: "Shop", path: "/" });
};
