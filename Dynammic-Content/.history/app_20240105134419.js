const http = require("http");
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In a middleware");
  next(); // allows the request to continue to the next middleware
});

app.use((req, res, next) => {
  console.log("Middleware 2");
  res.send("<h1>Hii Hardik</h1>");
});

app.listen;
