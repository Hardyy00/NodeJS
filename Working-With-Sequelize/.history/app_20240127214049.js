const path = require("path");
const express = require("express");
const app = express();
const { error } = require("./controllers/ErrorController");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const adminRoutes = require("./routes/adminRoutes");
const shopRoutes = require("./routes/shopRoutes");

app.use(express.urlencoded({ extended: false }));
// or
// app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.get("*", error);

app.listen(8080, (err) => {
  if (err) console.log(err);
  else console.log(`Local server at http://localhost:8080`);
});
