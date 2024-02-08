const express = require("express");
const router = express.Router();
const {
  getProducts,
  enterShop,
  getCart,
  checkout,
  getOrders,
  getProductDetail,
} = require("../controllers/ProductController");

router.get("/", enterShop);
router.get("/products", getProducts);
router.get("/cart", getCart);
router.get("/checkout", checkout);
router.get("/orders", getOrders);

router.get("/products/:id", getProductDetail);

module.exports = router;
