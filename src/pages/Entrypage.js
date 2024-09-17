import React from 'react';
import { useNavigate } from 'react-router-dom';

const Entrypage = () => {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    if (role === 'police') {
      navigate('/policesignup');
    } else if (role === 'admin') {
      navigate('/adminreg');
    }
  };

  // Inline styles as JS objects
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundImage: 'url(https://t3.ftcdn.net/jpg/03/92/91/40/360_F_392914039_a0snQzzWfCCm3vtJw3XmWArZlUykUSou.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.6)', // semi-transparent overlay
    },
    content: {
      zIndex: 2,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      padding: '40px',
      borderRadius: '10px',
      textAlign: 'center',
      maxWidth: '500px',
      width: '100%',
    },
    title: {
      fontSize: '2.5em',
      marginBottom: '20px',
    },
    quote: {
      fontSize: '1.2em',
      fontStyle: 'italic',
      marginBottom: '40px',
    },
    subtitle: {
      fontSize: '1.2em',
      marginBottom: '30px',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    button: {
      fontSize: '1em',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      width: '45%',
      color: '#fff',
      transition: 'background-color 0.3s',
    },
    policeButton: {
      backgroundColor: '#007bff',
    },
    policeButtonHover: {
      backgroundColor: '#0056b3',
    },
    adminButton: {
      backgroundColor: '#28a745',
    },
    adminButtonHover: {
      backgroundColor: '#218838',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div> {/* Overlay for darker background */}
      <div style={styles.content}>
        <h1 style={styles.title}>Secure the Future, Serve the Present</h1>
        <p style={styles.quote}>
          "Safety and security don’t just happen; they are the result of collective effort." 
        </p>
        <p style={styles.subtitle}>Please select your role:</p>
        <div style={styles.buttonContainer}>
          <button
            style={{ ...styles.button, ...styles.policeButton }}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.policeButtonHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = styles.policeButton.backgroundColor)}
            onClick={() => handleRoleSelection('police')}
          >
            Police
          </button>
          <button
            style={{ ...styles.button, ...styles.adminButton }}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.adminButtonHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = styles.adminButton.backgroundColor)}
            onClick={() => handleRoleSelection('admin')}
          >
            Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Entrypage;

