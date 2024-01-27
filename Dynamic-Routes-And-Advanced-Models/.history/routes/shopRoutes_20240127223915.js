const express = require("express");
const router = express.Router();
const {
  getProducts,
  enterShop,
  getCart,
  checkout,
} = require("../controllers/ProductController");

router.get("/", enterShop);
router.get("/products", getProducts);
router.get("/cart", getCart);
router.get("/checkout", checkout);

router.get("/orders");

module.exports = router;
