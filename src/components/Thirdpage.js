
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Thirdpage.css';

const Thirdpage = () => {
  const navigate = useNavigate();
  const [resetPasswordMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/Subscribe');
  };

  const handleForgetPassword = () => {
    alert('Reset password link sent to your registered email!');
  };

  return (
    <div className="card">
      <div className="Thirdpage">
        <h1>Login Page</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" />
          <button type="submit">Login</button>
        </form>
        <div className="forget-password">
          <button onClick={handleForgetPassword}>Forget Password?</button>
          {resetPasswordMessage && <p className="reset-password-message">{resetPasswordMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Thirdpage;
