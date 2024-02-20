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

exports.getEditProductPage = (req, res) => {
  const { id } = req.params;

  Product.findById(id, (product) => {
    res.render("admin/edit-product", {
      product,
      title: "Edit Product",
      path: "/edit-product",
    });
  });
};

exports.editProduct = (req, res) => {
  const { id } = req.params;
  const { title, imageUrl, price, description } = req.body;

  const newProduct = new Product(title, imageUrl, description, price);

  newProduct.id = id;

  Product.mutateProduct(id, newProduct);

  res.redirect("/admin/products");
};

exports.deleteProduct = (req, res) => {
  const { id } = req.params;

  Product.deleteProduct(id);
  res.redirect("/admin/products");
};
