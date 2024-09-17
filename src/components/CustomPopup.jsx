import React from "react";
import "./CustomPopup.css"; // Import custom CSS for styling

const CustomPopup = ({ category, crimeCount }) => (
  <div className="custom-popup">
    <strong>Category:</strong> {category}
    <br />
    <strong>Crime Count:</strong> {crimeCount}
  </div>
);

export default CustomPopup;
