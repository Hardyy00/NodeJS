const express = require("express");

const router = express.Router();

const {
  getLogin,
  postLogin,
  getSignup,
  logout,
  postSignup,
} = require("../controllers/AuthController");
router.get("/login", getLogin);

router.post("/login", postLogin);

router.post("/logout", logout);

router.get("/signup", getSignup);

router.post("/signup", postSignup);

module.exports = router;
