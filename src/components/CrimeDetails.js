import React from "react";

function CrimeDetails({ crimeData }) {
  // console.log("crimeDataaaaaaaaaaa",clickedLocation)
  if (!crimeData) {
    return <div>No crime details available</div>;
  }

  return (
    <div className="crime-details-container">
      <hr />
      <h3>Crime Details</h3>
      <div className="crime-details">
        <p>
          <strong>Category:</strong> {crimeData.category}
        </p>
        <p>
          <strong>Crime Count:</strong> {crimeData.crimeCount}
        </p>
        <p>
          <strong>Latitude:</strong> {crimeData.latitude}
        </p>
        <p>
          <strong>Longitude:</strong> {crimeData.longitude}
        </p>
        {/* <p>
        <strong>Message:</strong> {crimeData.message}
      </p> */}
      </div>
    </div>
  );
}

export default CrimeDetails;
