// config/constants.js

// Loan application stages
const LOAN_STATUS = {
  SUBMITTED: "Submitted",
  UNDER_REVIEW: "Under Review",
  APPROVED: "Approved",
  REJECTED: "Rejected",
};

// Document verification status
const DOCUMENT_STATUS = {
  PENDING: "Pending Review",
  APPROVED: "Approved",
  REJECT: "Requires Resubmission",
};

// Repayment status
const REPAYMENT_STATUS = {
  PAID: "paid",
  UPCOMING: "upcoming",
  OVERDUE: "overdue",
};

module.exports = {
  LOAN_STATUS,
  DOCUMENT_STATUS,
  REPAYMENT_STATUS,
};
