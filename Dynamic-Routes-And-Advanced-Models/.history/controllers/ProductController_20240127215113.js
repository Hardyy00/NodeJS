const Product = require("../Model/product");

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) =>
    res.render("shop/product-list", { products, title: "Shop", path: "/" })
  );
};

exports.enterShop = (req, res) => {
  res.render("shop/index");
};
