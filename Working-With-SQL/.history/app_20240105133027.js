const http = require("http");
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In a middleware");
  next(); // allows the request to continue to the next middleware
});

app.use((req, res, next) => {
  console.log("Middleware 2");
});

const server = http.createServer(app);

server.listen(8080, (err) => {
  if (err) console.log(err);
  else {
    console.log(`Server created at http://localhost:8080`);
  }
});
