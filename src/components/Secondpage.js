
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Secondpage.css';

const Secondpage = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
      navigate('/Thirdpage');
    };
    const handleSignup = () => {
     
      navigate('/fifthpage');
    };
  

    return (
      <div className="Secondpage">
        <h1>Get in into your account and enjoy with your family and friends!</h1>
  
        <div className="buttons-container">
          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>
          <span className="or-text">or</span>
          <button className="signup-btn" onClick={handleSignup}>
            Register
          </button>
        </div>
      </div>
    );
  };

export default Secondpage;