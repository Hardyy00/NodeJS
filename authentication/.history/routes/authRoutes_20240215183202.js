const express = require("express");

const router = express.Router();

require('../controllers/AuthController');
router.get("/login", getLogin);
