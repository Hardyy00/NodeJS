const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { error } = require("./controllers/ErrorController");
const { mongoConnect } = require("./util/database");
const User = require("./Model/user");
const adminRoutes = require("./routes/adminRoutes");
const shopRoutes = require("./routes/shopRoutes");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// or
// app.use(bodyParser.urlencoded({extended: false}))

app.use((req, res, next) => {
  User.findById("65c7716a02696c9bdb7051f8")
    .then((user) => {
      req.user = new User(user.username, user.email, user.cart, user._id);
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.get("*", error);

mongoose.connect("mongodb://127.0.0.1:27017/Nodeu").then(() => {
  app.listen(8080, (err) => {
    if (err) console.log(err);
    else console.log(`Local server at http://localhost:8080`);
  });
});
