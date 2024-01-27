const express = require("express");
const router = express.Router();
const {
  getAddProduct,
  postAddProduct,
} = require("../controllers/AdminController");

router.get("/add-product", getAddProduct);

router.post("/add-product", postAddProduct);

exports.routes = router;
exports.products = products;
// module.exports = router;
