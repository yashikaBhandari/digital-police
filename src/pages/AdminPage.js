// AdminPage.js
import Dashboard from '../components/Dashboard';
import Alerts from '../components/Alerts';
// AdminPage.js
import React from 'react';

function AdminPage() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, Admin! You can manage users, update crime data, and view reports here.</p>
      
      {/* Add additional admin features */}
      <div style={{ margin: '20px 0' }}>
        <h3>Manage Crime Data</h3>
        <button>Update Crime Data</button>
        <button>View Reports</button>
      </div>

      <div style={{ margin: '20px 0' }}>
        <h3>User Management</h3>
        <button>View Users</button>
        <button>Add New User</button>
      </div>
    
     <div>
     <Dashboard />
     <Alerts />
   </div>
   </div>
  );
}

export default AdminPage;
