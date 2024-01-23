import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Subscribe.css';
const Subscribe = () => {
        const navigate = useNavigate();
        const handleSubscribe = () => {
          navigate('/payment');
        };
  return (
    <div>
      <h1>Subscriptions</h1>
      <div className="subscription-option">
        <h2>Individual Subscription</h2>
        <p>Use our service for just Rs. 49 per month.</p>
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
      <div className="subscription-option">
        <h2>Couple Subscriptions</h2>
        <p>Use our service for two members at just Rs. 99 per month.</p>
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
      <div className="subscription-option">
        <h2>Family Subscriptions</h2>
        <p>Subscribe for the whole family at Rs. 149 per month.</p>
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;
