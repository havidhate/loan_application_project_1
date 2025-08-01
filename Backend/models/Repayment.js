// models/Repayment.js
const mongoose = require("mongoose");
const { REPAYMENT_STATUS } = require("../config/constants");

// const repaymentSchema = new mongoose.Schema({
//   loan: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "LoanApplication",
//     required: true,
//   },
//   dueDate: {
//     type: Date,
//     required: true,
//   },
//   amount: {
//     type: Number,
//     required: true,
//   },
//   status: {
//     type: String,
//     enum: Object.values(REPAYMENT_STATUS),
//     default: REPAYMENT_STATUS.UPCOMING,
//   },
//   paidAt: Date,
// }, { timestamps: true });

// module.exports = mongoose.model("Repayment", repaymentSchema);
const repaymentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  loanId: { type: mongoose.Schema.Types.ObjectId, ref: "LoanApplication", required: true },
  amount: { type: Number, required: true },
  dueDate: { type: Date, required: true },
  status: { type: String, enum: ["upcoming", "paid", "overdue"], default: "upcoming" }
}, { timestamps: true });

module.exports = mongoose.model("Repayment", repaymentSchema);