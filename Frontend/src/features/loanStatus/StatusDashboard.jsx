// src/features/loanStatus/StatusDashboard.jsx
import React, { useEffect, useState } from "react";
import "./status.css";

const StatusDashboard = () => {
  const [loanStatus, setLoanStatus] = useState("Submitted");
  const [documentStatus, setDocumentStatus] = useState("Pending Review");

  useEffect(() => {
    // Simulated status flow — replace with API in production
    const step1 = setTimeout(() => setLoanStatus("Under Review"), 2000);
    const step2 = setTimeout(() => {
      setLoanStatus("Approved");
      setDocumentStatus("Approved");
      alert("🎉 Your loan has been approved!");
    }, 5000);

    return () => {
      clearTimeout(step1);
      clearTimeout(step2);
    };
  }, []);

  const getProgressWidth = () => {
    switch (loanStatus) {
      case "Submitted":
        return "33%";
      case "Under Review":
        return "66%";
      case "Approved":
        return "100%";
      default:
        return "0%";
    }
  };

  return (
    <div className="status-section">
      <h3>Loan Application Status</h3>

      <div className="status-progress">
        <span>Status: {loanStatus}</span>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: getProgressWidth() }}
          />
        </div>
      </div>

      <div className="doc-status">
        <h4>Document Verification</h4>
        <div
          className={`doc-badge ${documentStatus
            .toLowerCase()
            .replace(/ /g, "-")}`}
        >
          {documentStatus}
        </div>
      </div>
    </div>
  );
};

export default StatusDashboard;
