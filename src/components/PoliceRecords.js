import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PoliceRecords.css";

export default function PoliceRecords() {
  const [policeRecords, setPoliceRecords] = useState([]);
  const [selectedPolice, setSelectedPolice] = useState(null);
  const [newStationId, setNewStationId] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" or "error"

  useEffect(() => {
    const fetchPoliceRecords = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3002/api/police/getPoliceRecords"
        );
        setPoliceRecords(response.data);
      } catch (error) {
        console.error("Error fetching police records:", error);
      }
    };
    fetchPoliceRecords();
  }, []);

  const handlePoliceSelect = (police) => {
    setSelectedPolice(police);
    setNewStationId(police.stationId || "");
    setModalOpen(true);
    setMessage(""); // Clear message when selecting a new police record
    setMessageType(""); // Clear message type when selecting a new police record
  };

  const handleStationIdChange = async () => {
    if (!selectedPolice) return;

    try {
      await axios.post("http://localhost:3002/api/police/updateStationId", {
        regId: selectedPolice.regId,
        stationId: newStationId,
      });
      setPoliceRecords((prevRecords) =>
        prevRecords.map((record) =>
          record.regId === selectedPolice.regId
            ? { ...record, stationId: newStationId }
            : record
        )
      );
      setMessage("Station ID updated successfully");
      setMessageType("success");
    } catch (error) {
      console.error("Error updating station ID:", error);
      setMessage("Failed to update Station ID");
      setMessageType("error");
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setMessage(""); // Clear message when closing the modal
    setMessageType(""); // Clear message type when closing the modal
  };

  return (
    <div className="policeRecordsContainer">
      <h1>Police Records</h1>
      <div className="recordsList">
        {policeRecords.map((police) => (
          <div
            key={police.regId}
            className={`recordCard ${
              selectedPolice?.regId === police.regId ? "selected" : ""
            }`}
            onClick={() => handlePoliceSelect(police)}
          >
            <h2>Reg ID: {police.regId}</h2>
            <p>
              <strong>email:</strong> {police.email}
            </p>
            <p>
              <strong>Station ID:</strong> {police.stationId || "Not assigned"}
            </p>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="modal">
          <div className="modalContent">
            <h2>Update Station ID</h2>
            <input
              type="text"
              value={newStationId}
              onChange={(e) => setNewStationId(e.target.value)}
              placeholder="Enter new Station ID"
            />
            <button onClick={handleStationIdChange}>Update</button>
            <button onClick={handleCloseModal} className="closeButton">
              Close
            </button>
            {message && <p className={`message ${messageType}`}>{message}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
