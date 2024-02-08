const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("form");
});

app.post("/", (req, res) => {
  const { name } = req.body;

  fs.readFile("user.json", (err, data) => {
    const users = JSON.parse(data);
    users.push(name);

    fs.writeFile("user.json", JSON.stringify(users));

    res.redirect("/");
  });
});

app.get("/users", (req, res) => {
  fs.readFile("user.json", (err, data) => {
    const users = JSON.parse(data);

    res.render("users", { users });
  });
});

app.listen(8080);
