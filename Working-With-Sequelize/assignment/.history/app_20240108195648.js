const express = require("express");
const app = express();
const fs = require("fs");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("form");
});

app.get("/users", (req, res) => {
  fs.readFile("user.json", (err, data) => {
    const resData = JSON.parse(data);

    res.render("users", { resData });
  });
});

app.listen(8080);
