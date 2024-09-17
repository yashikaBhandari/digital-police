import React, { useEffect, useState } from 'react';

function Alerts() {
  const [location, setLocation] = useState(null);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Get user location and check against zones
  }, [location]);

  return (
    <div>
      {alerts.length > 0 && (
        <ul>
          {alerts.map((alert, index) => (
            <li key={index}>{alert}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Alerts;
