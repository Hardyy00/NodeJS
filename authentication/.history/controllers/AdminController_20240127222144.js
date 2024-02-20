const Product = require("../Model/product");

exports.getAddProduct = (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  //   next(); // allows the request to continue to the next middleware

  res.render("admin/add-product", {
    title: "Add Product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res) => {

  const {title, }
  const product = new Product(req.body.);
  product.save();
  res.redirect("/");
};

exports.getAdminProducts = (req, res) => {
  Product.fetchAll((products) =>
    res.render("admin/products", {
      products,
      title: "Admin Products",
      path: "/admin/admin-products",
    })
  );
};
