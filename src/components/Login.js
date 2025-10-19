import React, { useEffect } from 'react';
import './Login.css';

const Login = ({ setIsAuthenticated }) => {

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

  useEffect(() => {
    // Auto-enter after snow animation loads
    const timer = setTimeout(() => {
      setIsAuthenticated(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [setIsAuthenticated]);

  return (
    <div className="login-container">
      <div className="snow-container"></div>

      <div className="login-card">
        <div className="logo-section">
          <h1 className="logo-title">FROST</h1>
          <p className="logo-subtitle">Friendsmas Rivalry of Seasonal Triumph</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
