const http = require("http");
const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));
// or
// app.use(bodyParser.urlencoded({extended: false}))

app.use("/", (req, res, next) => {
  res.send("<h1>Hello</h1>");
});

app.listen(8080, (err) => {
  if (err) console.log(err);
  else console.log(`Local server at http://localhost:8080`);
});
