import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet"; // Import Leaflet for custom marker icons
import "leaflet/dist/leaflet.css";
import { getZone } from "../api"; // Assuming this is your API function
import "./MapView.css"; // Import the custom CSS
import CustomPopup from "./CustomPopup";

// Fix missing marker icons
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function MapView() {
  const [zone, setZone] = useState(null);
  const [clickedLocation, setClickedLocation] = useState(null);

  // Fetch zone data whenever a new location is clicked
  useEffect(() => {
    if (clickedLocation) {
      (async () => {
        try {
          const response = await getZone({
            latitude: clickedLocation.lat,
            longitude: clickedLocation.lng,
          });

          if (response && response.zone) {
            setZone(response.zone);
          }
        } catch (error) {
          console.error("Error fetching zone data:", error);
        }
      })();
    }
  }, [clickedLocation]);

  // Function to handle map click events
  function LocationClickHandler() {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setClickedLocation({ lat, lng }); // Set the clicked location
        console.log(`Clicked location: Latitude ${lat}, Longitude ${lng}`);
      },
    });
    return null;
  }

  return (
    <div>
      {zone && 
        (<div className="custom-popup">
        <strong>Category:</strong> {zone.category}
        <br />
        <strong>Crime Count:</strong> {zone.crimeCount}
      </div>)}
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: "600px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationClickHandler />

        {/* Display zone information based on API response */}
        {zone && (
          <Marker position={[zone.latitude, zone.longitude]}>
            <Popup
              className="popup-danger"
              style={{ backgroundColor: zone.category, color: "#fff" }}
            >
              <strong>Category:</strong> {zone.category}
              <br />
              <strong>Crime Count:</strong> {zone.crimeCount}
            </Popup>
          </Marker>
        )}

        {/* Marker for clicked location */}
        {clickedLocation && (
          <Marker position={[clickedLocation.lat, clickedLocation.lng]}>
            <Popup>
              <strong>Clicked Location</strong>
              <br />
              Latitude: {clickedLocation.lat}
              <br />
              Longitude: {clickedLocation.lng}
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}

export default MapView;
