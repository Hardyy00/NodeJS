const express = require("express");
const router = express.Router();

router.get("/add-products", (req, res, next) => {
  res.send(
    "<form method='POST' action='/admin/product'><input type='text' name='title'/> <button type='submit'>Submit</button></form>"
  );
  //   next(); // allows the request to continue to the next middleware
});

router.post("/product", (req, res) => {
  //   const { title } = req.body;
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
