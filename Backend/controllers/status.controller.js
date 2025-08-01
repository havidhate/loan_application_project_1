// controllers/status.controller.js
const LoanApplication = require("../models/LoanApplication");
const { LOAN_STATUS } = require("../config/constants");
const sendEmail = require("../utils/email.service");

const getStatus = async (req, res) => {
  try {
    const result = await sendEmail();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @route GET /api/status/:loanId
// @desc  Get status of a specific loan application
exports.getLoanStatus = async (req, res) => {
  try {
    const loan = await LoanApplication.findOne({
      _id: req.params.loanId,
      user: req.user.id,
    });

    if (!loan) return res.status(404).json({ message: "Loan not found" });

    res.status(200).json({ status: loan.status });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving status", error: error.message });
  }
};

// @route PATCH /api/status/:loanId
// @desc  Update loan status (admin or simulation)
exports.updateLoanStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!Object.values(LOAN_STATUS).includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    const loan = await LoanApplication.findByIdAndUpdate(
      req.params.loanId,
      { status },
      { new: true }
    );

    if (!loan) return res.status(404).json({ message: "Loan not found" });

    res.status(200).json({ message: "Status updated", loan });
  } catch (error) {
    res.status(500).json({ message: "Error updating status", error: error.message });
  }
};
