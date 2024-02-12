const http = require("http");
const express = require("express");

const app = express();

app.use("/add-products", (req, res, next) => {
  res.send("<h1>Add Products page</h1>");
  //   next(); // allows the request to continue to the next middleware
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello</h1>");
});

app.listen(8080, (err) => {
  if (err) console.log(err);
  else console.log(`Local server at http://localhost:8080`);
});
