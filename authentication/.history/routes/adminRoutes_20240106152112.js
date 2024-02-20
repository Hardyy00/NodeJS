const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/add-products", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
  //   next(); // allows the request to continue to the next middleware
});

router.post("/product", (req, res) => {
  //   const { title } = req.body;
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
