const express = require("express");
const router = express.Router();
const path = require("path");

const rootDir = require("../util/path");

const products = [];

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
  //   next(); // allows the request to continue to the next middleware
});

router.post("/product", (req, res) => {
  //   const { title } = req.body;
  console.log(req.body);
  res.redirect("/");
});

exports.routes;
module.exports = router;
