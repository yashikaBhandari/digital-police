// MapView.js
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import * as turf from '@turf/turf';

function MapView() {
  const [zones, setZones] = useState([]);
  const [clickedPosition, setClickedPosition] = useState(null);
  const [zoneInfo, setZoneInfo] = useState(null);

  useEffect(() => {
    async function fetchZones() {
      try {
        const response = await fetch('/api/zone/get');
        const data = await response.json();
        setZones(data);
      } catch (error) {
        console.error('Error fetching zones:', error);
      }
    }

    fetchZones();
  }, []);

  const handleMapClick = (event) => {
    const { lat, lng } = event.latlng;
    setClickedPosition([lat, lng]);

    // Check which zone, if any, the clicked position falls into
    const point = turf.point([lng, lat]);

    const foundZone = zones.find((zone) => {
      // Assuming zones are defined with a center point and radius
      const zoneCenter = [parseFloat(zone.longitude), parseFloat(zone.latitude)];
      const zoneRadius = 5000; // Example radius in meters
      const zoneCircle = turf.circle(zoneCenter, zoneRadius, { units: 'meters' });

      return turf.booleanPointInPolygon(point, zoneCircle);
    });

    setZoneInfo(foundZone || null);
  };

  const center = [20.5937, 78.9629]; // Center of India or any preferred location
  const zoom = 5;

  return (
    <div>
      <MapContainer center={center} zoom={zoom} style={{ height: '600px', width: '100%' }} onClick={handleMapClick}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {zones.map((zone, index) => (
          <Circle
            key={index}
            center={[parseFloat(zone.latitude), parseFloat(zone.longitude)]}
            radius={5000} // Example radius in meters
            color="blue"
            fillOpacity={0.2}
          >
            <Popup>
              Zone: {zone.name} <br /> Crime Count: {zone.crimeCount}
            </Popup>
          </Circle>
        ))}
        {clickedPosition && (
          <Marker position={clickedPosition}>
            <Popup>
              {zoneInfo ? (
                `You clicked in Zone: ${zoneInfo.name} with Crime Count: ${zoneInfo.crimeCount}`
              ) : (
                'No zone information available for this location.'
              )}
            </Popup>
          </Marker>
        )}
      </MapContainer>
      {clickedPosition && (
        <div style={{ marginTop: '20px' }}>
          <h3>Clicked Location Details</h3>
          <p>Latitude: {clickedPosition[0]}</p>
          <p>Longitude: {clickedPosition[1]}</p>
          {zoneInfo ? (
            <p>Zone: {zoneInfo.name}<br />Crime Count: {zoneInfo.crimeCount}</p>
          ) : (
            <p>No zone information available for this location.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default MapView;
