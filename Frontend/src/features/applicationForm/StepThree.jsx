// src/features/applicationForm/StepThree.jsx
import React, { useState } from "react";
import { applyForLoan } from "../../services/loanService";
import { toast } from "react-toastify";

const StepThree = ({ prevStep }) => {
  const [file, setFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!file) {
      toast.error("Please upload a document before submitting.");
      return;
    }

    // FormData for file upload
    const formData = new FormData();
    formData.append("document", file);
    formData.append("fullName", localStorage.getItem("fullName")); // temp stored
    formData.append("email", localStorage.getItem("email"));
    formData.append("income", localStorage.getItem("income"));
    formData.append("loanAmount", localStorage.getItem("loanAmount"));

    try {
      setSubmitting(true);
      const res = await applyForLoan(formData);
      toast.success("🎉 Application submitted!");
      console.log("Server Response:", res);
    } catch (err) {
      toast.error("❌ Submission failed.");
      console.error("Error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h3>Step 3: Upload Documents</h3>

      <label>Upload ID Proof (PDF or Image)</label>
      <input
        type="file"
        accept=".pdf,.jpg,.jpeg,.png"
        onChange={handleFileChange}
      />
      {file && <p>📄 Selected File: {file.name}</p>}

      <div style={{ marginTop: "10px" }}>
        <button onClick={prevStep}>Back</button>
        <button onClick={handleSubmit} disabled={submitting}>
          {submitting ? "Submitting..." : "Submit Application"}
        </button>
      </div>
    </div>
  );
};

export default StepThree;
