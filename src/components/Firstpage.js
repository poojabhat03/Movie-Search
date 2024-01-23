
import React from 'react';
import './Firstpage.css'; 
import { useNavigate } from 'react-router-dom';
const Firstpage = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate('/secondpage');
  };
  return (
    <div className="centered-container">
      <h1>Welcome to My Movie App!</h1>
        <h2>Gateway to unlimited movie magic!</h2>
        <p> Seamless streaming on-the-go: Your movie app onboarding experience
      </p>
      <button onClick={handleGetStarted} className="bigger-button">
        LET'S START 
      </button>
    </div>
  );
};
export default Firstpage;