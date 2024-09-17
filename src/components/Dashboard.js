// Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Dashboard() {
  // Sample crime data
  const data = {
    labels: ['Theft', 'Robbery', 'Assault', 'Burglary', 'Fraud'],
    datasets: [
      {
        label: 'Reported Cases in 2023',
        data: [120, 90, 150, 80, 110], // Sample crime statistics
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Crime Statistics - 2023',
      },
    },
  };

  return (
    <div>
      <h1>Crime Statistics Dashboard</h1>
      <p>This dashboard shows crime data statistics and analytics.</p>

      {/* Bar Chart displaying crime statistics */}
      <div style={{ width: '600px', height: '400px' }}>
        <Bar data={data} options={options} />
      </div>

      {/* Button to navigate to Admin Page */}
      <Link to="/admin">
        <button style={{ marginTop: '20px' }}>Go to Admin Page</button>
      </Link>
    </div>
  );
}

export default Dashboard;
