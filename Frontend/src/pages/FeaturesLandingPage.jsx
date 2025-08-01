// src/pages/FeaturesLandingPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./featuresLanding.css";

const FeaturesLandingPage = () => {
  return (
    <div className="features-container">
      <h1>Welcome to the Loan Management System</h1>
      <p>Select a feature to get started:</p>

      <div className="features-grid">
        <Link to="/apply" className="feature-card">
          📝 Apply for Loan
        </Link>
        <Link to="/dashboard" className="feature-card">
          📊 Track Loan Status
        </Link>
        <Link to="/repaymentcalendar" className="feature-card">
          📅 Repayment Calendar
        </Link>
        <Link to="/compare" className="feature-card">
          📈 Compare Loan Options
        </Link>
      </div>
    </div>
  );
};

export default FeaturesLandingPage;
