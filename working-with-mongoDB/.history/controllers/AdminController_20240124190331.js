const products = [];

exports.getAddProduct = (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  //   next(); // allows the request to continue to the next middleware

  res.render("add-product", { title: "Add Product", path: "/add-product" });
};

exports.postAddProduct = (req, res) => {
  const { title } = req.body;
  products.push({ title });
  res.redirect("/");
};

// module.exports = ;
