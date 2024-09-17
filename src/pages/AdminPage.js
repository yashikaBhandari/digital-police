// AdminPage.js
import React from 'react';
import Dashboard from '../components/Dashboard';
import Alerts from '../components/Alerts';
import MapView from '../components/MapView';

function AdminPage() {
  const pageStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f9',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '1000px',
    margin: '0 auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const sectionStyle = {
    backgroundColor: '#ffffff',
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
    marginBottom: '10px',
  };

  const titleStyle = {
    color: '#333',
    textAlign: 'center',
    marginBottom: '30px',
  };

  const buttonContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Admin Dashboard</h1>
      <p style={{ textAlign: 'center', marginBottom: '20px' }}>
        Welcome, Admin! You can manage users, update crime data, and view reports here.
      </p>

      <div style={sectionStyle}>
        <h3>Manage Crime Data</h3>
        <div style={buttonContainer}>
          <button style={buttonStyle}>Update Crime Data</button>
          <button style={buttonStyle}>View Reports</button>
        </div>
      </div>

      <div style={sectionStyle}>
        <h3>User Management</h3>
        <div style={buttonContainer}>
          <button style={buttonStyle}>View Users</button>
          <button style={buttonStyle}>Add New User</button>
        </div>
      </div>

      <div style={sectionStyle}>
        <h3>Zones on Map</h3>
        <MapView />
      </div>

      <div style={{ marginTop: '30px' }}>
        <Dashboard />
        <Alerts />
      </div>
    </div>
  );
}

export default AdminPage;
