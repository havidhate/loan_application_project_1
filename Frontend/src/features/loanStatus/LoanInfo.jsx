import React, { useEffect, useState } from "react";
import axios from "axios";
import "./status.css";

const LoanInfo = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/loan`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setLoans(res.data);
      } catch (err) {
        console.error("Error fetching loans", err);
      }
    };

    fetchLoans();
  }, []);

  return (
    <div className="loan-section">
      <h2>Your Loan Applications</h2>
      {loans.map((loan, index) => (
        <div className="loan-card" key={loan._id}>
          <p>Application #{index + 1}</p>
          <p>Name: {loan.personalInfo.fullName}</p>
          <p>Email: {loan.personalInfo.email}</p>
          <p>Amount: ₹{loan.loanDetails.amount}</p>
          <p>Status: {loan.status}</p>
          <p>
            Document:{" "}
            <a
              href={`${import.meta.env.VITE_API_URL}/uploads/${loan.document}`}
              target="_blank"
              rel="noreferrer"
            >
              View
            </a>
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default LoanInfo;
