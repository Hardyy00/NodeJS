const Product = require("../Model/product");

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) =>
    res.render("shop/product-list", { products, title: "Products", path: "/" })
  );
};

exports.enterShop = (req, res) => {
  res.render("shop/index", {
    title: "Shop",
    path: "/",
  });
};

exports.getCart = (req, res) => {
  res.render("shop/cart", {
    title: "Cart",
    path: "/shop/cart",
  });
};
