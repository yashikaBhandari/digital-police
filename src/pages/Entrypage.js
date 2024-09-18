import React from "react";
import { useNavigate } from "react-router-dom";
import "./Entrypage.css"; // Import the CSS file

const Entrypage = () => {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    if (role === "police") {
      navigate("/policesignup");
    } else if (role === "admin") {
      navigate("/adminreg");
    }
  };

  return (
    <div className="entrypage-container">
      <div className="entrypage-overlay"></div>
      <div className="entrypage-content">
        <h1 className="entrypage-title">
          Secure the Future, Serve the Present
        </h1>
        <p className="entrypage-quote">
          "Safety and security don’t just happen; they are the result of
          collective effort."
        </p>
        <p className="entrypage-subtitle">Please select your role:</p>
        <div className="entrypage-button-container">
          <button
            className="entrypage-button entrypage-police-button"
            onClick={() => handleRoleSelection("police")}
          >
            Police
          </button>
          <button
            className="entrypage-button entrypage-admin-button"
            onClick={() => handleRoleSelection("admin")}
          >
            Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Entrypage;
