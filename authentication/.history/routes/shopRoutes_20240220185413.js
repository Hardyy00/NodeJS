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
  deleteCartItem,
  postOrder,
} = require("../controllers/ProductController");
const isAuth = require("../middleware/is_auth");

is_auth;
router.get("/", enterShop);
router.get("/products", getProducts);
router.get("/cart", getCart);
router.post("/cart/:id", addToCart);
router.get("/checkout", checkout);
router.get("/orders", getOrders);

router.get("/products/:id", getProductDetails);
router.post("/delete-cart-item", deleteCartItem);
router.post("/order", postOrder);
module.exports = router;
