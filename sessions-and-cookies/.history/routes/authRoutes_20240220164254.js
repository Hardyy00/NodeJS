const express = require("express");

const router = express.Router();

const {
  getLogin,
  postLogin,
  logout,
} = require("../controllers/AuthController");
router.get("/login", getLogin);

router.post("/login", postLogin);

router.post("/logout", logout);

router.get("/signup", getSignup);

module.exports = router;
