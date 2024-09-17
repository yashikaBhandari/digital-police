import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { getZone } from '../api';

function MapView() {
  const [zones, setZones] = useState([]);

  useEffect(() => {
    // Fetch and set zones here
  }, []);

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "600px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {zones.map((zone, index) => (
        <Marker key={index} position={[zone.latitude, zone.longitude]}>
          <Popup>
            <strong>Category:</strong> {zone.category}<br />
            <strong>Crime Count:</strong> {zone.crimeCount}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapView;
