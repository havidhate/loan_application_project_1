// routes/loan.routes.js
const express = require("express");
const router = express.Router();
const {
  createLoanApplication,
  getUserLoans,
  getLoanById,
} = require("../controllers/loan.controller");

const { verifyToken } = require("../middlewares/auth.middleware");
const upload = require("../middlewares/upload.middleware");

// @route   POST /api/loan
router.post(
  "/", 
  verifyToken, 
  upload.single("document"), // Handle file upload
  createLoanApplication
);

// @route   GET /api/loan
router.get("/", verifyToken, getUserLoans);

// @route   GET /api/loan/:id
router.get("/:id", verifyToken, getLoanById);

module.exports = router;
