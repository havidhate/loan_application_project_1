// controllers/loan.controller.js
const LoanApplication = require("../models/LoanApplication");
const Repayment = require("../models/Repayment");
// @route POST /api/loan
// @desc  Submit a new loan application
exports.createLoanApplication = async (req, res) => {
  try {
    const { fullName, email, income, loanAmount } = req.body;

    const newLoan = new LoanApplication({
      user: req.user.id,
      personalInfo: {
        fullName,
        email,
      },
      financialInfo: {
        income,
      },
      loanDetails: {
        amount: loanAmount,
      },
      document: req.file?.filename || null,  
    });

    await newLoan.save();

    const installment = Math.ceil(loanAmount / 6);
const schedule = [];
const startDate = new Date();

for (let i = 1; i <= 6; i++) {
  const dueDate = new Date(startDate);
  dueDate.setMonth(dueDate.getMonth() + i);

  schedule.push({
    user: req.user.id,
    loanId: newLoan._id,
    amount: installment,
    dueDate,
    status: "upcoming",
  });
}

await Repayment.insertMany(schedule);

    res.status(201).json({ message: "Loan application submitted", loan: newLoan });
  } catch (error) {
    res.status(500).json({ message: "Failed to submit loan application", error: error.message });
  }
};

// @route GET /api/loan
// @desc  Get all loans for logged-in user
exports.getUserLoans = async (req, res) => {
  try {
    const loans = await LoanApplication.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json(loans);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch loans", error: error.message });
  }
};

// @route GET /api/loan/:id
// @desc  Get loan by ID (for detailed view or edit)
exports.getLoanById = async (req, res) => {
  try {
    const loan = await LoanApplication.findOne({ _id: req.params.id, user: req.user.id });
    if (!loan) return res.status(404).json({ message: "Loan not found" });
    res.status(200).json(loan);
  } catch (error) {
    res.status(500).json({ message: "Error fetching loan", error: error.message });
  }
};
