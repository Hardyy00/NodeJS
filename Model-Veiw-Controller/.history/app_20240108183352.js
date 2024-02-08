const path = require("path");
const express = require("express");
const app = express();

app.set("view engine");
const adminData = require("./routes/adminRoutes");
const shopRoutes = require("./routes/shopRoutes");

app.use(express.urlencoded({ extended: false }));
// or
// app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, "public")));

app.use(adminData.routes);
app.use(shopRoutes);

app.get("*", (req, res) => {
  // __dirname will give : path to current directory , here it is root folder
  res.status(404).sendFile(path.join(__dirname, "views", "error-page.html"));
});

app.listen(8080, (err) => {
  if (err) console.log(err);
  else console.log(`Local server at http://localhost:8080`);
});
