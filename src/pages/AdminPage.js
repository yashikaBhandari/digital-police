// src/pages/AdminPage.js
import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./AdminPage.css";

function AdminPage() {
  return (
    <div className="adminPage">
      <div className="admin-nav-bar">
        <div className="admin-nav-left-content">
          <h1>Admin Dashboard</h1>
        </div>
        <div className="admin-nav-right-content">
          {/* Navigation Links */}
          <Link to="viewMap">
            <button className="btn-simple view-map">View Map</button>
          </Link>
          <Link to="policeRecords">
            <button className="btn-simple police-record">Police Records</button>
          </Link>
          <Link to="userRecords">
            <button className="btn-simple user-record">User Records</button>
          </Link>
          <Link to="zoneRecords">
            <button className="btn-simple zone-record">Zone Records</button>
          </Link>
          <Link to="crimeRecords">
            <button className="btn-simple crime-record">Crime Records</button>
          </Link>
          <Link to="/adminlogin">
            <button className="btn-simple logout-button">Logout</button>
          </Link>
        </div>
      </div>
      <div className="admin-content">
        {/* This is where the subroute components will be rendered */}
        <Outlet />
      </div>
    </div>
  );
}

export default AdminPage;
