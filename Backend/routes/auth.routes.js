// routes/auth.routes.js
const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/auth.controller");

// @route   POST /api/auth/signup
router.post("/signup", signup);

// @route   POST /api/auth/login
router.post("/login", login);

module.exports = router;
