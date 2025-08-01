// src/features/applicationForm/StepOne.jsx
import React, { useState } from "react";

const StepOne = ({ nextStep }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
  });

  const validate = () => {
    let temp = {};
    temp.fullName =
      formData.fullName.trim().length >= 3
        ? ""
        : "Name must be at least 3 characters.";
    temp.email = /\S+@\S+\.\S+/.test(formData.email)
      ? ""
      : "Invalid email format.";
    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleNext = () => {
    if (validate()) {
      // Save to localStorage before moving to next step
      localStorage.setItem("fullName", formData.fullName);
      localStorage.setItem("email", formData.email);
      nextStep();
    }
  };

  return (
    <div>
      <h3>Step 1: Personal Information</h3>

      <label>Full Name</label>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="John Doe"
      />
      <small className="tooltip">Enter your full legal name.</small>
      {errors.fullName && <div className="error">{errors.fullName}</div>}

      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="john@example.com"
      />
      <small className="tooltip">We'll use this to contact you.</small>
      {errors.email && <div className="error">{errors.email}</div>}

      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default StepOne;
