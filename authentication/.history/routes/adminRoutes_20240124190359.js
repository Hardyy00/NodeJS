const express = require("express");
const router = express.Router();
const {
  getAddProduct,
  postAddProduct,
} = require("../controllers/AdminController");

router.get("/add-product", getAddProduct);

router.post("/add-product", postAddProduct);

module.exports = router;
// module.exports = router;
