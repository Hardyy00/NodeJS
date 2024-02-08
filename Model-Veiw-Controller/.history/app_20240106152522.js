const express = require("express");
const app = express();
const path = require("path");

const adminRoutes = require("./routes/adminRoutes");
const shopRoutes = require("./routes/shopRoutes");

app.use(express.urlencoded({ extended: false }));
// or
// app.use(bodyParser.urlencoded({extended: false}))

app.use(adminRoutes);
app.use(shopRoutes);

app.get("*", (req, res) => {
  res.status(404).sendFile("");
});

app.listen(8080, (err) => {
  if (err) console.log(err);
  else console.log(`Local server at http://localhost:8080`);
});
