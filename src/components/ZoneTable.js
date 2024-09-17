import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const ZoneTable = () => {
  const [zones, setZones] = useState([]);

  useEffect(() => {
    fetch('/api/zone/getAll') // Assuming you have an endpoint to get all zones
      .then((response) => response.json())
      .then((data) => setZones(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`/api/zone/delete/${id}`, { method: 'DELETE' })
      .then(() => setZones(zones.filter((zone) => zone.id !== id)));
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Latitude</TableCell>
            <TableCell>Longitude</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Crime Count</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {zones.map((zone) => (
            <TableRow key={zone.id}>
              <TableCell>{zone.latitude}</TableCell>
              <TableCell>{zone.longitude}</TableCell>
              <TableCell>{zone.category}</TableCell>
              <TableCell>{zone.crimeCount}</TableCell>
              <TableCell>
                <Button variant="contained" color="secondary" onClick={() => handleDelete(zone.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ZoneTable;
