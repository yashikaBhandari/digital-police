import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import CrimeDetails from "./CrimeDetails";
import "./MapView.css"; // Import the CSS

// Fix missing marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function MapView() {
  const [clickedLocation, setClickedLocation] = useState(null);
  const [crimeData, setCrimeData] = useState(null);
  const [bgColor, setBgColor] = useState(""); // State to control background color
  // const [blink, setBlink] = useState(false); // State to trigger blink animation

  // Function to handle map click events
  function LocationClickHandler() {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setClickedLocation({ lat, lng });
        setCrimeData(null); // Reset crime data if a new location is clicked
        console.log(`Clicked location: Latitude ${lat}, Longitude ${lng}`);
      },
    });
    return null;
  }

  // Function to fetch crime details from the backend using fetch
  const fetchCrimeDetails = async () => {
    if (clickedLocation) {
      try {
        const response = await fetch("http://localhost:3002/api/zone/get", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            latitude: "26.701495159492374",
            longitude: "78.96558009833348",
          }),
        });

        const data = await response.json();
        console.log(data.zone);
        if (data) {
          setCrimeData(data.zone);

          // Change background color based on crimeData.category
          const categoryColor = data.zone.category;
          setBgColor(categoryColor); // Use the category directly as the background color

          // Trigger blink animation for 1 second
          // setBlink(true);
          // setTimeout(() => setBlink(false), 1000);
        }
      } catch (error) {
        console.error("Error fetching crime data:", error);
      }
    }
  };

  return (
    <div
      className={`mapView ${crimeData ? "blink" : ""}`}
      style={{ backgroundColor: crimeData ? "" : bgColor }} // Dynamically set background color
    >
      <MapContainer
        center={[28.6139, 77.209]} // Default center on Delhi, India
        zoom={13}
        style={{ height: "80vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationClickHandler />

        {clickedLocation && (
          <Marker position={[clickedLocation.lat, clickedLocation.lng]}>
            <Popup>
              <strong>Clicked Location</strong>
              <br />
              Latitude: {clickedLocation.lat}
              <br />
              Longitude: {clickedLocation.lng}
              <br />
              <button className="btn-crime" onClick={fetchCrimeDetails}>Get Zone Details</button>
            </Popup>
          </Marker>
        )}

        {crimeData && clickedLocation && (
          <Marker position={[clickedLocation.lat, clickedLocation.lng]}>
            <Popup>
              <strong>Crime Information</strong>
              <br />
              Category: {crimeData.category}
              <br />
              Crime Count: {crimeData.crimeCount}
            </Popup>
          </Marker>
        )}
      </MapContainer>

      {/* Render the CrimeDetails component */}
      <CrimeDetails crimeData={crimeData} />
    </div>
  );
}

export default MapView;
