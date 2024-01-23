import React from 'react';

import './Payment.css';
import { useNavigate } from 'react-router-dom';
const Payment = () => {
    
    const navigate = useNavigate();
        const handleNext = () => {
          console.log('Next button clicked!');
         
 
    
    navigate('/fourthpage');
  };
       
  return (
    <div className="payment-container">
      <h1>Payment Method</h1>

      <div className="payment-card">
      <div className="payment-logo">
          <img src="https://www.arribatrends.com/wp-content/uploads/2020/09/Paytm.jpg" alt="googlePayLogo" />
        </div>
        
        <h2>Paytm</h2>
        <a
          href="https://play.google.com/store/apps/details?id=net.one97.paytm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Paytm
        </a>
      </div>

      <div className="payment-card">
      <div className="payment-logo">
          <img src="https://i.pinimg.com/736x/60/5a/bd/605abdb7af3405c6b20a426b1e128322.jpg" alt="googlePayLogo" />
        </div>
        <h2>GooglePay</h2>
        <a
          href="https://play.google.com/store/apps/details?id=com.google.android.apps.walletnfcrel"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Google Pay
        </a>
      </div>

      <div className="payment-card">
      <div className="payment-logo">
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phonepe-logo-icon.png" alt="googlePayLogo" />
        </div>
        <h2>PhonePe</h2>
        <a
          href="https://play.google.com/store/apps/details?id=com.phonepe.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to PhonePe
        </a>
      </div>
      <div>
      <button className="next-button" onClick={handleNext}>
        Next
      </button>
      </div>
    </div>
  );
};

export default Payment;