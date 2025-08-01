// src/pages/Dashboard.jsx
import React from "react";
import StatusDashboard from "../features/loanStatus/StatusDashboard";
import LoanInfo from "../features/loanStatus/LoanInfo";
const Dashboard = () => {
  return (
    <div className="container">
      <h2>Loan Application Dashboard</h2>

      {/* Loan Status Tracker */}
      <StatusDashboard />

      <LoanInfo />
    </div>
  );
};

export default Dashboard;
