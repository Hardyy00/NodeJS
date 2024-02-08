const express = require("express");
const router = express.Router();
const {
  getProducts,
  enterShop,
  getCart,
} = require("../controllers/ProductController");

router.get("/", enterShop);
router.get("/products", getProducts);
router.get("/cart", getCart);

module.exports = router;
