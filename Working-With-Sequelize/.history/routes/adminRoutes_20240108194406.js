const express = require("express");
const router = express.Router();
const path = require("path");

const rootDir = require("../util/path");

const products = [];

router.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  //   next(); // allows the request to continue to the next middleware

  res.render("add-product", { title: "Add Product", path: "/add-product" });
});

router.post("/add-product", (req, res) => {
  const { title } = req.body;
  products.push({ title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
// module.exports = router;
