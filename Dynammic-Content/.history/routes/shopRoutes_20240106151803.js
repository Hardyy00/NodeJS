const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res, next) => {
  res.render(path.join(), "../", "views", "shop.html");
});

module.exports = router;
