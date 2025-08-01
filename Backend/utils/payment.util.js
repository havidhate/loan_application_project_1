// utils/payment.util.js

/**
 * Calculates EMI based on standard formula
 * @param {number} principal - Loan amount
 * @param {number} annualRate - Annual interest rate in %
 * @param {number} tenureMonths - Total number of monthly payments
 */
const calculateEMI = (principal, annualRate, tenureMonths) => {
  const monthlyRate = annualRate / 12 / 100;

  if (monthlyRate === 0) return principal / tenureMonths;

  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
    (Math.pow(1 + monthlyRate, tenureMonths) - 1);

  return parseFloat(emi.toFixed(2));
};

/**
 * Returns full loan breakdown
 */
const getLoanSummary = (principal, annualRate, tenureMonths) => {
  const emi = calculateEMI(principal, annualRate, tenureMonths);
  const totalPayment = emi * tenureMonths;
  const totalInterest = totalPayment - principal;

  return {
    principal,
    emi,
    totalPayment: parseFloat(totalPayment.toFixed(2)),
    totalInterest: parseFloat(totalInterest.toFixed(2)),
  };
};

module.exports = {
  calculateEMI,
  getLoanSummary,
};
