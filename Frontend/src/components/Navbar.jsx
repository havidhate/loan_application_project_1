// // src/components/Navbar.jsx
// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   const [theme, setTheme] = useState("light");
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     document.documentElement.setAttribute("data-theme", newTheme);
//   };

//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//   }, [theme]);

//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <Link to="/">💼 LoanApp</Link>
//       </div>
//       <div className="nav-links">
//         <Link to="/features">Home</Link>
//         {/* <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link> */}
//         <button className="theme-toggle" onClick={toggleTheme}>
//           {theme === "light" ? "🌙" : "☀️"}
//         </button>
//         <button className="logout-btn" onClick={handleLogout}>
//           Logout
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check login status
  const checkLoginStatus = () => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  };

  useEffect(() => {
    checkLoginStatus();
    // Recheck login status on route change
  }, [location]);

  // Sync logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
  };

  // Theme toggle
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">💼 LoanApp</Link>
      </div>
      <div className="nav-links">
        {isLoggedIn ? (
          <>
            <Link to="/features">Home</Link>
            {/* <Link to="/apply">Apply</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/compare">Compare</Link> */}
            {/* <button className="theme-toggle" onClick={toggleTheme}>
              {theme === "light" ? "🌙" : "☀️"}
            </button> */}
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/">Home</Link>
            {/* <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link> */}
            {/* <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link> */}
            {/* <button className="theme-toggle" onClick={toggleTheme}>
              {theme === "light" ? "🌙" : "☀️"}
            </button> */}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
