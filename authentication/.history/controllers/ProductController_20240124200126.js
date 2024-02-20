const Product = require("../Model/product");

exports.getProducts = (req, res, next) => {
  Product.fetchAll(pro);
  res.render("shop", { products, title: "Shop", path: "/" });
};
