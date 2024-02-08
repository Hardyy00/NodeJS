const Product = require("../Model/product");
const { products } = require("./AdminController");

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll();
  res.render("shop", { products, title: "Shop", path: "/" });
};
