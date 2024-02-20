const path = require("path");
const express = require("express");
const app = express();
const { error } = require("./controllers/ErrorController");
const { mongoConnect } = require("./util/database");
const User = require("./Model/user");
const adminRoutes = require("./routes/adminRoutes");
const shopRoutes = require("./routes/shopRoutes");
const db = require("./util/database");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// or
// app.use(bodyParser.urlencoded({extended: false}))

app.use((req, res, next) => {
  User.findById("65c757cb02696c9bdb7051f3")
    .then((user) => {
      req.user = user;
    })
    .catch((err) => {
      console.log(err);
    });
  next();
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.get("*", error);

mongoConnect(() => {
  app.listen(8080, (err) => {
    if (err) console.log(err);
    else console.log(`Local server at http://localhost:8080`);
  });
});
