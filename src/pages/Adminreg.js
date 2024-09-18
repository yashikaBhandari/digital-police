import React, { useState } from "react";
import axios from "axios";
import "./PoliceSignup.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";

const Adminreg = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate(); // Initialize navigate for navigation

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3002/api/auth/register",
        {
          data: formData,
          accountType: "ADMIN", // Set accountType here
        }
      );

      if (response.status === 201) {
        setSuccessMessage("Admin registration successful!");
      }
    } catch (error) {
      setError("Failed to register Admin officer. Please try again.");
    }
  };

  const handleLoginRedirect = () => {
    navigate("/adminlogin"); // Redirect to the login page
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <h2 className="signup-heading">Admin Registration</h2>
        {error && <p className="signup-error">{error}</p>}
        {successMessage && <p className="signup-success">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="signup-form-group">
          </div>
          <div className="signup-form-group">
            <label className="signup-label">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="signup-input"
            />
          </div>
          <div className="signup-form-group">
            <label className="signup-label">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="signup-input"
            />
          </div>
          <button type="submit" className="signup-button">
            Register
          </button>
        </form>
        <button
          className="signup-login-button"
          onClick={handleLoginRedirect} // Redirect to login on click
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Adminreg;
