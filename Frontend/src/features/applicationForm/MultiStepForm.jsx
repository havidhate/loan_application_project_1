// src/features/applicationForm/MultiStepForm.jsx
import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import "./form.css";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="multi-form">
      <div className="breadcrumb">
        <span className={step === 1 ? "active" : ""}>Personal Info</span>
        <span className={step === 2 ? "active" : ""}>Financial Details</span>
        <span className={step === 3 ? "active" : ""}>Document Upload</span>
      </div>

      <div className="step-container">
        {step === 1 && <StepOne nextStep={nextStep} />}
        {step === 2 && <StepTwo nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <StepThree prevStep={prevStep} />}
      </div>
    </div>
  );
};

export default MultiStepForm;
