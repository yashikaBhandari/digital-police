// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Entrypage from "./pages/Entrypage";
import PoliceSignup from "./pages/PoliceSignup";
import PoliceLogin from "./pages/PoliceLogin";
import Adminreg from "./pages/Adminreg";
import AdminLogin from "./pages/AdminLogin";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
import PoliceRecords from "./components/PoliceRecords";
import UserRecords from "./components/UserRecords";
import ZoneRecords from "./components/ZoneRecords";
import CrimeRecords from "./components/CrimeRecords";
import MapView from "./components/MapView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Entrypage />} />
        <Route path="/policesignup" element={<PoliceSignup />} />
        <Route path="/policelogin" element={<PoliceLogin />} />
        <Route path="/adminreg" element={<Adminreg />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminHome" element={<AdminPage />}>
          {/* Nested Routes */}
          <Route path="viewMap" element={<MapView />} />
          <Route path="policeRecords" element={<PoliceRecords />} />
          <Route path="userRecords" element={<UserRecords />} />
          <Route path="zoneRecords" element={<ZoneRecords />} />
          <Route path="crimeRecords" element={<CrimeRecords />} />
        </Route>
        <Route path="/policeHome" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
