const Product = require("../Model/product");

exports.enterShop = (req, res) => {
  res.render("shop/index", {
    title: "Shop",
    path: "/",
  });
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) =>
    res.render("shop/product-list", {
      products,
      title: "Products",
      path: "/products",
    })
  );
};

exports.getCart = (req, res) => {
  res.render("shop/cart", {
    title: "Cart",
    path: "/cart",
  });
};

exports.addToCart = (req, res) => {};

exports.checkout = (req, res) => {
  res.render("shop/checkout", {
    title: "Checkout",
    path: "/checkout",
  });
};

exports.getOrders = (req, res) => {
  res.render("shop/orders", { title: "Orders", path: "/orders" });
};

exports.getProductDetails = (req, res) => {
  const { id } = req.params;

  Product.findById(id, (product) => {
    res.render("shop/product-details", {
      title: "Details Page",
      path: "/products",
      product,
    });
  });
};
