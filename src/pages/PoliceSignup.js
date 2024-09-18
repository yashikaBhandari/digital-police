import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./PoliceSignup.css"; // Import the CSS file

const PoliceSignup = () => {
  const [formData, setFormData] = useState({
    regId: "",
    email: "",
    password: "",
    gender: "Male",
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
          accountType: "POLICE", // Set accountType here
        }
      );

      if (response.status === 201) {
        setSuccessMessage("Police registration successful!");
      }
    } catch (error) {
      setError("Failed to register police officer. Please try again.");
    }
  };

  const handleLoginRedirect = () => {
    navigate("/policelogin"); // Redirect to the login page
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <h2 className="signup-heading">Police Registration</h2>
        {error && <p className="signup-error">{error}</p>}
        {successMessage && <p className="signup-success">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="signup-form-group">
            <label className="signup-label">Registration ID:</label>
            <input
              type="text"
              name="regId"
              value={formData.regId}
              onChange={handleChange}
              required
              className="signup-input"
            />
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
          <div className="signup-form-group">
            <label className="signup-label">Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="signup-select"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
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

export default PoliceSignup;
