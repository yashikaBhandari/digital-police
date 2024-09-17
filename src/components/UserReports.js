import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const UserReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Fetch user reports from the server
    fetch('/api/reports')
      .then((response) => response.json())
      .then((data) => setReports(data));
  }, []);

  const handleMarkResolved = (id) => {
    // Mark report as resolved
    fetch(`/api/reports/resolve/${id}`, { method: 'POST' })
      .then(() => setReports(reports.filter((report) => report.id !== id)));
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell>Report</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reports.map((report) => (
            <TableRow key={report.id}>
              <TableCell>{report.user}</TableCell>
              <TableCell>{report.content}</TableCell>
              <TableCell>{report.status}</TableCell>
              <TableCell>
                <Button variant="contained" color="secondary" onClick={() => handleMarkResolved(report.id)}>Mark as Resolved</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserReports;
