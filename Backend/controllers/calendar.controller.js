// controllers/calendar.controller.js
const Repayment = require("../models/Repayment");

// @route GET /api/calendar
// @desc  Get repayment schedule for logged-in user
exports.getRepaymentSchedule = async (req, res) => {
  try {
    const repayments = await Repayment.find({ user: req.user.id }).sort({ dueDate: 1 });
    res.status(200).json(repayments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching schedule", error: error.message });
  }
};

// @route PATCH /api/calendar/:id/pay
// @desc  Mark a repayment as paid
exports.markAsPaid = async (req, res) => {
  try {
    const repayment = await Repayment.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      { status: "paid" },
      { new: true }
    );
    if (!repayment) return res.status(404).json({ message: "Payment not found" });

    res.status(200).json({ message: "Payment marked as paid", repayment });
  } catch (error) {
    res.status(500).json({ message: "Error updating payment", error: error.message });
  }
};
