import React, { useState } from 'react';
import { createZone } from '../api';

function ZoneForm() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [category, setCategory] = useState('RED');
  const [crimeCount, setCrimeCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const zoneData = { latitude, longitude, category, crimeCount };
    createZone(zoneData)
      .then(response => {
        alert('Zone added successfully!');
      })
      .catch(error => {
        console.error('Error adding zone:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)} required />
      <input type="text" placeholder="Longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} required />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="RED">RED</option>
        <option value="YELLOW">YELLOW</option>
        <option value="GREEN">GREEN</option>
      </select>
      <input type="number" placeholder="Crime Count" value={crimeCount} onChange={(e) => setCrimeCount(e.target.value)} required />
      <button type="submit">Add Zone</button>
    </form>
  );
}

export default ZoneForm;
