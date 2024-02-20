const express = require("express");
const router = express.Router();
const {
  getAddProduct,
  postAddProduct,
  getAdminProducts,
  getEditProductPage,
  editProduct,
  deleteProduct,
} = require("../controllers/AdminController");
const isAuth = require("../middleware/is_auth");

router.get("/add-product", isAuth, getAddProduct);

router.post("/add-product", isAuth, postAddProduct);
router.get("/products", isAuth, getAdminProducts);
router.get("/:id/edit-product", isAuth, getEditProductPage);
router.post("/:id/edit-product", isAuth, editProduct);
router.post("/:id/delete-product", isAuth, deleteProduct);

// router.post("/delete-product");

module.exports = router;
// module.exports = router;
