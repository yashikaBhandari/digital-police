import React, { useState } from 'react';
import { getZone } from '../api';

function ZoneDetails() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [zone, setZone] = useState(null);

  const handleSearch = () => {
    getZone(latitude, longitude)
      .then(response => {
        setZone(response.data);
      })
      .catch(error => {
        console.error('Error fetching zone details:', error);
      });
  };

  return (
    <div>
      <input type="text" placeholder="Latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
      <input type="text" placeholder="Longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
      <button onClick={handleSearch}>Get Zone Details</button>
      {zone && (
        <div>
          <p>Category: {zone.category}</p>
          <p>Crime Count: {zone.crimeCount}</p>
        </div>
      )}
    </div>
  );
}

export default ZoneDetails;
