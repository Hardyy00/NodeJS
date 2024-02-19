const express = require("express");

const router = express.Router();

const { getLogin } = require("../controllers/AuthController");
router.get("/login", getLogin);
