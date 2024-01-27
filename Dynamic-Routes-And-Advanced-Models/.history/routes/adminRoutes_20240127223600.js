const express = require("express");
const router = express.Router();
const {
  getAddProduct,
  postAddProduct,
  getAdminProducts,
} = require("../controllers/AdminController");

router.get("/add-product", getAddProduct);

router.post("/add-product", postAddProduct);
router.get("/admin-products", getAdminProducts);

// router.post("/delete-product");

module.exports = router;
// module.exports = router;
