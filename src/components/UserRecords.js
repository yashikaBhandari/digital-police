// src/components/UserRecords.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserRecords.css";

const UserRecords = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filterType, setFilterType] = useState("all"); // 'all', 'registered', 'sos'
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch user data from the API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://685a-2409-40d1-1019-232a-a5bd-52a6-d983-f637.ngrok-free.app/getAllDocs"
        );
        console.log("API Response:", response.data); // Inspect the response

        let data = response.data;

        // If data is wrapped inside another object, adjust accordingly
        if (!Array.isArray(data)) {
          if (data.users && Array.isArray(data.users)) {
            data = data.users;
          } else {
            throw new Error("API response is not an array");
          }
        }

        setUsers(data);
        setFilteredUsers(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching user records:", err);
        setError("Failed to fetch user records.");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Categorize users based on the presence of 'email' and 'name'
  const categorizeUsers = (type) => {
    setFilterType(type);
    if (type === "registered") {
      const registered = users.filter(
        (user) => user.name?.trim() !== "" && user.email?.trim() !== ""
      );
      setFilteredUsers(registered);
    } else if (type === "sos") {
      const sos = users.filter(
        (user) => user.name?.trim() === "" || user.email?.trim() === ""
      );
      setFilteredUsers(sos);
    } else {
      setFilteredUsers(users);
    }
  };

  // Helper function to render user details
  const renderUserDetails = (user) => {
    return (
      <div className="user-card" key={user.id}>
        <h3>{user.name ? user.name : "SOS User"}</h3>
        <p>
          <strong>Email:</strong> {user.email ? user.email : "N/A"}
        </p>
        <p>
          <strong>Age:</strong> {user.age ? user.age : "N/A"}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone ? user.phone : "N/A"}
        </p>
        <p>
          <strong>Emergency Contact:</strong>{" "}
          {user.emergencyContact ? user.emergencyContact : "N/A"}
        </p>
        <p>
          <strong>Parent Contact 1:</strong>{" "}
          {user.parentContact1 ? user.parentContact1 : "N/A"}
        </p>
        <p>
          <strong>Parent Contact 2:</strong>{" "}
          {user.parentContact2 ? user.parentContact2 : "N/A"}
        </p>
        {user.location && (
          <div className="location">
            <p>
              <strong>Location:</strong>
            </p>
            <p>Latitude: {user.location.latitude}</p>
            <p>Longitude: {user.location.longitude}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="userRecordsContainer">
      <h1>User Records</h1>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button
          className={filterType === "all" ? "active" : ""}
          onClick={() => categorizeUsers("all")}
        >
          All Users
        </button>
        <button
          className={filterType === "registered" ? "active" : ""}
          onClick={() => categorizeUsers("registered")}
        >
          Registered Users
        </button>
        <button
          className={filterType === "sos" ? "active" : ""}
          onClick={() => categorizeUsers("sos")}
        >
          SOS Users
        </button>
      </div>

      {/* Content */}
      <div className="usersList">
        {loading ? (
          <p>Loading user records...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : !Array.isArray(filteredUsers) ? (
          <p className="error">Data format error.</p>
        ) : filteredUsers.length === 0 ? (
          <p>No users found.</p>
        ) : (
          filteredUsers.map((user) => renderUserDetails(user))
        )}
      </div>
    </div>
  );
};

export default UserRecords;
