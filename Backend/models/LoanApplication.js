// models/LoanApplication.js
const mongoose = require("mongoose");
const { LOAN_STATUS } = require("../config/constants");

const loanApplicationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  personalInfo: {
    fullName: String,
    dob: Date,
    email: String,
    phone: String,
  },
  financialInfo: {
    income: Number,
    employmentStatus: String,
    creditScore: Number,
  },
  document: {
  type: String, // filename stored by multer
  required: false,
},
  loanDetails: {
    amount: Number,
    purpose: String,
    termMonths: Number,
    interestRate: Number,
    document: {
  type: String, // filename stored by multer
  required: false,
},
  },
  status: {
    type: String,
    enum: Object.values(LOAN_STATUS),
    default: LOAN_STATUS.SUBMITTED,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  }
}, { timestamps: true });

module.exports = mongoose.model("LoanApplication", loanApplicationSchema);
