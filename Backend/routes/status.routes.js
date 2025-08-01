// routes/status.routes.js
const express = require("express");
const router = express.Router();
const {
  getLoanStatus,
  updateLoanStatus,
} = require("../controllers/status.controller");

const { verifyToken } = require("../middlewares/auth.middleware");

// @route GET /api/status/:loanId
router.get("/:loanId", verifyToken, getLoanStatus);

// @route PATCH /api/status/:loanId
router.patch("/:loanId", verifyToken, updateLoanStatus);

module.exports = router;
