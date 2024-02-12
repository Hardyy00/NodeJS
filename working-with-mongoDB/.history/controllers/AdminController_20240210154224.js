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
  const product = new Product(title, price, description, image);
  product
    .save()
    .then((result) => {
      console.log(result);
      res.redirect("/products");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAdminProducts = (req, res) => {
  Product.fetchAll()
    .then((products) => {
      res.render("admin/products", {
        products,
        title: "Admin Products",
        path: "/admin/products",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getEditProductPage = (req, res) => {
  const { id } = req.params;

  Product.findById(id)
    .then((product) => {
      res.render("admin/edit-product", {
        product,
        title: "Edit Product",
        path: "/edit-product",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.editProduct = (req, res) => {
  const { id } = req.params;
  const { title, imageUrl, price, description } = req.body;

  const newProduct = new Product(title, price, description, imageUrl);

  Product.mutateProduct(id, newProduct);

  res.redirect("/admin/products");
};

exports.deleteProduct = (req, res) => {
  const { id } = req.params;

  console.log(id);

  Product.deleteProduct()
    .then((val) => {
      console.log(val);
      res.redirect("/admin/products");
    })
    .catch((err) => {
      console.log(err);
    });
};
