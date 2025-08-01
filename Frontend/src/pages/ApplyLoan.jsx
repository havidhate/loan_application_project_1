// src/pages/ApplyLoan.jsx
import React from "react";
import MultiStepForm from "../features/applicationForm/MultiStepForm";

const ApplyLoan = () => {
  return (
    <div className="container">
      <h2>Loan Application Form</h2>
      <MultiStepForm />
    </div>
  );
};

export default ApplyLoan;
