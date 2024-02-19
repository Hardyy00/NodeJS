const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

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
