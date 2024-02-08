const express = require("express");
const router = express.Router();

app.use("/add-products", (req, res, next) => {
  res.send(
    "<form method='POST' action='/product'><input type='text' name='title'/> <button type='submit'>Submit</button></form>"
  );
  //   next(); // allows the request to continue to the next middleware
});

app.post("/product", (req, res) => {
  //   const { title } = req.body;
  console.log(req.body);
  res.redirect("/");
});
