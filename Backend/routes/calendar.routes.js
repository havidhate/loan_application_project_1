// routes/calendar.routes.js
const express = require("express");
const router = express.Router();
const {
  getRepaymentSchedule,
  markAsPaid,
} = require("../controllers/calendar.controller");

const { verifyToken } = require("../middlewares/auth.middleware");

// @route GET /api/calendar
router.get("/", verifyToken, getRepaymentSchedule);

// @route PATCH /api/calendar/:id/pay
router.patch("/:id/pay", verifyToken, markAsPaid);

module.exports = router;
