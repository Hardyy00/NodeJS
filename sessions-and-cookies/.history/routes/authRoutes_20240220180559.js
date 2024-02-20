const express = require("express");

const router = express.Router();

const {
  getLogin,
  postLogin,
  getSignup,
  logout,
} = require("../controllers/AuthController");
router.get("/login", getLogin);

router.post("/login", postLogin);

router.post("/logout", logout);

module.exports = router;
