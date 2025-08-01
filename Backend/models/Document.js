// models/Document.js
const mongoose = require("mongoose");
const { DOCUMENT_STATUS } = require("../config/constants");

const documentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  loan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "LoanApplication",
    required: true,
  },
  type: {
    type: String,
    required: true, // e.g., "PAN", "Aadhar", "Income Proof"
  },
  filePath: {
    type: String,
    required: true, // stored path in /uploads
  },
  status: {
    type: String,
    enum: Object.values(DOCUMENT_STATUS),
    default: DOCUMENT_STATUS.PENDING,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  }
}, { timestamps: true });

module.exports = mongoose.model("Document", documentSchema);
