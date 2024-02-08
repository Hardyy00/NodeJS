const { products } = require("./AdminController");

console.log(products);

exports.getProducts = (req, res, next) => {
  res.render("shop", { products, title: "Shop", path: "/" });
};
