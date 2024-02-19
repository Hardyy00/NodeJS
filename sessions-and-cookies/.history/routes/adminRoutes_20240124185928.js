const express = require("express");
const router = express.Router();
const { getAddProduct } = require("../controllers/AdminController");

const products = [];

router.get("/add-product", getAddProduct);

router.post("/add-product");

exports.routes = router;
exports.products = products;
// module.exports = router;
