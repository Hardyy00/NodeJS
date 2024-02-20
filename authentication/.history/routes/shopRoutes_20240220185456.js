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
router.get("/products", isAuth, getProducts);
router.get("/cart", isAuth, getCart);
router.post("/cart/:id", isAuth, addToCart);
router.get("/checkout", isAuth, checkout);
router.get("/orders", isAuth, getOrders);

router.get("/products/:id", isAuth, getProductDetails);
router.post("/delete-cart-item", isAuth, deleteCartItem);
router.post("/order", isAuth, postOrder);
module.exports = router;
