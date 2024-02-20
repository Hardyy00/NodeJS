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
  const { title, image, price, description } = req.body;
  const product = new Product(title, image, description, price);
  product.save();
  res.redirect("/products");
};

exports.getAdminProducts = (req, res) => {
  Product.fetchAll((products) =>
    res.render("admin/products", {
      products,
      title: "Admin Products",
      path: "/admin/products",
    })
  );
};
