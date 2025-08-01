// src/features/comparisonTool/LoanComparison.jsx
import React, { useState } from "react";
import "./comparison.css";

const initialLoans = [
  { type: "Personal", interest: 10, term: 12 },
  { type: "Student", interest: 6, term: 24 },
  { type: "Mortgage", interest: 7, term: 60 },
];

const LoanComparison = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [filter, setFilter] = useState({ interest: 10, term: 60 });

  const calculateEMI = (principal, rate, months) => {
    const r = rate / 1200;
    return ((principal * r) / (1 - Math.pow(1 + r, -months))).toFixed(2);
  };

  const filteredLoans = initialLoans.filter(
    (loan) => loan.interest <= filter.interest && loan.term <= filter.term
  );

  return (
    <div className="comparison-section">
      <div className="controls">
        <label>Loan Amount (₹)</label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(Number(e.target.value))}
        />

        <label>Max Interest (%)</label>
        <input
          type="range"
          min="1"
          max="15"
          value={filter.interest}
          onChange={(e) => setFilter({ ...filter, interest: e.target.value })}
        />
        <span>{filter.interest}%</span>

        <label>Max Term (Months)</label>
        <input
          type="range"
          min="6"
          max="60"
          step="6"
          value={filter.term}
          onChange={(e) => setFilter({ ...filter, term: e.target.value })}
        />
        <span>{filter.term} months</span>
      </div>

      <table>
        <thead>
          <tr>
            <th>Loan Type</th>
            <th>Interest (%)</th>
            <th>Term</th>
            <th>Monthly EMI</th>
          </tr>
        </thead>
        <tbody>
          {filteredLoans.map((loan, i) => (
            <tr key={i} className={loan.interest <= 8 ? "highlight" : ""}>
              <td>{loan.type}</td>
              <td>{loan.interest}</td>
              <td>{loan.term}</td>
              <td>₹{calculateEMI(loanAmount, loan.interest, loan.term)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoanComparison;
