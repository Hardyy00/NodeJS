const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const { error } = require("./controllers/ErrorController");
const User = require("./Model/user");
const adminRoutes = require("./routes/adminRoutes");
const shopRoutes = require("./routes/shopRoutes");
const authRoutes = require("./routes/authRoutes");
const session = require("express-session");
const MongodbStore = require("connect-mongodb-session")(session);

const Mongodb_URI = "mongodb://127.0.0.1:27017/Nodeu";

const app = express();
const store = new MongodbStore({
  uri: Mongodb_URI,
  collection: "session",
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
    store,
  })
);

app.use(async (req, res, next) => {
  try {
    if (req.session.user) {
      req.user = await User.findById(req.session.user._id);
    }
    next();
  } catch (err) {
    console.log(err);
  }
});

// or
// app.use(bodyParser.urlencoded({extended: false}))

// app.use(async (req, res, next) => {
//   try {
//     req.user = await User.findById("65c9f787b2f8313231784993");
//     next();
//   } catch (err) {
//     console.log(err);
//   }
// });

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.get("*", error);

mongoose
  .connect(Mongodb_URI)
  .then(() => {
    User.findOne().then((user) => {
      if (!user) {
        user = new User({
          username: "Hardik",
          email: "ha@4.com",
          cart: { items: [] },
        });

        user.save();
      }
    });
    console.log("DB connected");
    app.listen(8080, (err) => {
      if (err) console.log(err);
      else console.log(`Local server at http://localhost:8080`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
