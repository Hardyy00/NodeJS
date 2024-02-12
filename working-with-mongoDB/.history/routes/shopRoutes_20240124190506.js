const express = require("express");
const router = express.Router();
const path = require("path");

const rootDir = require("../util/path");
const adminData = require("./adminRoutes");

router.get("/");

module.exports = router;
