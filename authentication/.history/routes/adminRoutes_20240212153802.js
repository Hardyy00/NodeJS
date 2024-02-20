const express = require("express");
const router = express.Router();
const {
  getAddProduct,
  postAddProduct,
  // getAdminProducts,
  // getEditProductPage,
  // editProduct,
  // deleteProduct,
} = require("../controllers/AdminController");

router.get("/add-product", getAddProduct);

router.post("/add-product", postAddProduct);
// router.get("/products", getAdminProducts);
// router.get("/:id/edit-product", getEditProductPage);
// router.post("/:id/edit-product", editProduct);
// router.post("/:id/delete-product", deleteProduct);

// router.post("/delete-product");

module.exports = router;
// module.exports = router;
