import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import HomePage from './pages/HomePage';
//import AdminPage from './pages/AdminPage';
import Entrypage from './pages/Entrypage';
import PoliceSignup from './pages/PoliceSignup';
import PoliceLogin from './pages/PoliceLogin';
import Adminreg from './pages/Adminreg';
import AdminLoginPage from './pages/AdminLogin';


function App() {
  return (
    /*<Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/admin" element={<AdminPage />} />

      </Routes>
    </Router>*/
    <Router>
      <Routes>
        <Route path="/" element={<Entrypage />} />
        <Route path="/policesignup" element={<PoliceSignup />}
        />
         <Route path="/policelogin" element={<PoliceLogin />}
        />
        <Route path="/adminreg" element={<Adminreg />}
        />
         <Route path="/adminlogin" element={<AdminLoginPage />}
        />


      </Routes>
    </Router>
  );
}

export default App;
