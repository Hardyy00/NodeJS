const express = require("express");
const router = express.Router();
const { getProducts, enterShop } = require("../controllers/ProductController");

router.get("/", enterShop);
router.get("/products", getProducts);

module.exports = router;
