import React, { useState, useEffect } from 'react';
import './Login.css';

const Login = ({ setIsAuthenticated }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Create snowflakes
    const snowContainer = document.querySelector('.snow-container');
    const snowflakeCount = 50;

    for (let i = 0; i < snowflakeCount; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.innerHTML = '❅';
      snowflake.style.left = Math.random() * 100 + '%';
      snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
      snowflake.style.animationDelay = Math.random() * 5 + 's';
      snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';
      snowflake.style.opacity = Math.random() * 0.6 + 0.4;
      snowContainer.appendChild(snowflake);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // TODO: Replace with actual API call
    // For now, simple password check
    if (password === 'frost2024') {
      setIsAuthenticated(true);
    } else {
      setError('Invalid password');
    }
  };

  return (
    <div className="login-container">
      <div className="snow-container"></div>

      <div className="login-card">
        <div className="logo-section">
          <h1 className="logo-title">FROST</h1>
          <p className="logo-subtitle">Friendsmas Rivalry of Seasonal Triumph</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="login-input"
              required
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="login-button">
            Enter Competition
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
