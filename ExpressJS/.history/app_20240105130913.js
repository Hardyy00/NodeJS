const http = require("http");
const express = require("express");

const server = http.createServer();

server.listen(8080, (err) => {
  if (err) console.log(err);
  else {
    console.log(`Server created at http://localhost:8080.com`);
  }
});
