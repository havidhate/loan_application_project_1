// src/features/applicationForm/StepTwo.jsx
import React, { useState } from "react";

const StepTwo = ({ nextStep, prevStep }) => {
  const [formData, setFormData] = useState({
    income: "",
    loanAmount: "",
  });

  const [errors, setErrors] = useState({
    income: "",
    loanAmount: "",
  });

  const validate = () => {
    let temp = {};
    temp.income =
      !isNaN(formData.income) && formData.income > 0
        ? ""
        : "Please enter a valid income.";
    temp.loanAmount =
      !isNaN(formData.loanAmount) && formData.loanAmount > 0
        ? ""
        : "Loan amount must be greater than 0.";
    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleNext = () => {
    if (validate()) {
      // Save to localStorage before moving to final step
      localStorage.setItem("income", formData.income);
      localStorage.setItem("loanAmount", formData.loanAmount);
      nextStep();
    }
  };

  return (
    <div>
      <h3>Step 2: Financial Information</h3>

      <label>Annual Income (₹)</label>
      <input
        type="number"
        name="income"
        value={formData.income}
        onChange={handleChange}
        placeholder="e.g., 500000"
      />
      <small className="tooltip">
        Your annual income helps determine loan eligibility.
      </small>
      {errors.income && <div className="error">{errors.income}</div>}

      <label>Requested Loan Amount (₹)</label>
      <input
        type="number"
        name="loanAmount"
        value={formData.loanAmount}
        onChange={handleChange}
        placeholder="e.g., 200000"
      />
      <small className="tooltip">Enter how much loan you're requesting.</small>
      {errors.loanAmount && <div className="error">{errors.loanAmount}</div>}

      <div style={{ marginTop: "10px" }}>
        <button onClick={prevStep}>Back</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default StepTwo;
