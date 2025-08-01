// // src/pages/HomePage.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import "./home.css";

// const HomePage = () => {
//   return (
//     <div className="homepage-container">
//       <div className="hero-section">
//         <h1>Loan Application System</h1>
//         <p className="subtitle">
//           Apply, Track, and Manage Your Loans Seamlessly
//         </p>
//         <div className="cta-buttons">
//           <Link to="/login">
//             <button className="btn primary-btn">Login</button>
//           </Link>
//           <Link to="/signup">
//             <button className="btn secondary-btn">Sign Up</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
// src/pages/HomePage.jsx
// src/pages/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const HomePage = () => {
  return (
    <div className="home-wrapper">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to LoanEase</h1>
          <p>Your trusted partner for easy and secure loan applications.</p>
          <div className="cta-group">
            <Link to="/login" className="btn primary-btn">
              Login
            </Link>
            <Link to="/signup" className="btn secondary-btn">
              Sign Up
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://th.bing.com/th/id/OIP.sBQcQjEantfxbgHDysOe-AHaHa?w=204&h=204&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
            alt="Loan Illustration"
          />
        </div>
      </header>

      <section className="about-section">
        <h2>About Us</h2>
        <p>
          LoanEase is a smart loan management platform helping users apply,
          track, and manage personal loans with transparency and ease. We're
          revolutionizing the lending experience.
        </p>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: support@loanease.com | Phone: +91-9876543210</p>
      </section>

      <footer className="footer">
        &copy; {new Date().getFullYear()} LoanEase. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
