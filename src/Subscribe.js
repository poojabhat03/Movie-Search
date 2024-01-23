import React from 'react';
import './SubscribePage.css'; 

const SubscribePage = () => {
  return (
    <div className="subscription-container">
      <h2>Subscribe Now!</h2>
      <p>Choose the subscription plan that suits you:</p>

      <div className="button-box" id="subscribe-box">
        <button id="subscribe-btn">Subscribe</button>
      </div>

      <div className="button-box" id="couple-box">
        <button id="couple-btn">Couple</button>
      </div>

      <div className="button-box" id="family-box">
        <button id="family-btn">Family</button>
      </div>
    </div>
  );
};

export default SubscribePage;
