const express = require("express");
const router = express.Router();
const {
  getProducts,
  enterShop,
  getCart,
  checkout,
  getOrders,
  getProductDetails,
  addToCart,
} = require("../controllers/ProductController");

router.get("/", enterShop);
router.get("/products", getProducts);
router.get("/cart", getCart);
router.post("/cart/:id", addToCart);
router.get("/checkout", checkout);
router.get("/orders", getOrders);

router.get("/products/:id", getProductDetails);

module.exports = router;
