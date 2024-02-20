const Product = require("../Model/product");

exports.getAddProduct = (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  //   next(); // allows the request to continue to the next middleware

  res.render("admin/add-product", {
    title: "Add Product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = async (req, res) => {
  const { title, image: imageUrl, price, description } = req.body;

  const product = new Product({ title, imageUrl, price, description });

  try {
    await product.save();
    res.status(200).redirect("/products");
  } catch (err) {
    res.status(500).redirect("/products");
  }
};

exports.getAdminProducts = (req, res) => {

  try{

    const products = await Product.find();
    res.render("admin/products", {
      products,
      title: "Admin Products",
      path: "/admin/products",
    });

    
  }catch (err) {
    res
      .status(404)
      .render("404", { title: "Something went wrong", path: "/error" });
  }
  
};

exports.getEditProductPage = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    res.render("admin/edit-product", {
      product,
      title: "Edit Product",
      path: "/edit-product",
    });
  } catch (err) {
    res
      .status(404)
      .render("404", { title: "Something went wrong", path: "/error" });
  }
};

// exports.editProduct = (req, res) => {
//   const { id } = req.params;
//   const { title, imageUrl, price, description } = req.body;

//   const newProduct = new Product(
//     title,
//     price,
//     description,
//     imageUrl,
//     req.user._id
//   );

//   Product.mutateProduct(id, newProduct)
//     .then(() => {
//       res.redirect("/admin/products");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// exports.deleteProduct = (req, res) => {
//   const { id } = req.params;

//   Product.deleteProduct(id)
//     .then(() => {
//       res.redirect("/admin/products");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
