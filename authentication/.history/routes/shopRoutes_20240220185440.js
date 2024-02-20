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

router.get("/", isAuth, enterShop);
router.get("/products",isAuth, getProducts);
router.get("/cart",isAuth, getCart);
router.post("/cart/:id",isAuth addToCart);
router.get("/checkout", checkout);
router.get("/orders", getOrders);

router.get("/products/:id", getProductDetails);
router.post("/delete-cart-item", deleteCartItem);
router.post("/order", postOrder);
module.exports = router;
