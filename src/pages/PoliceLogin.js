import React, { useState } from "react";
import axios from "axios";
import "./PoliceLogin.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";

const PoliceLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/policeHome"); // Redirect to the login page
  };
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
        "http://localhost:3002/api/auth/login",
        {
          data: {
            email: formData.email,
            password: formData.password,
          },
          accountType: "POLICE",
        }
      );

      if (response.status === 200) {
        setSuccessMessage("Login successful!");
        handleLoginRedirect();
        // Redirect to a different page or handle post-login logic
      }
    } catch (error) {
      setError("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Police Login</h2>
        {error && <p className="message error">{error}</p>}
        {successMessage && <p className="message success">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default PoliceLogin;
