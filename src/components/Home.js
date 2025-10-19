import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {
  useEffect(() => {
    // Create shooting stars
    const createShootingStar = () => {
      const star = document.createElement('div');
      star.className = 'shooting-star';

      // Random starting position at top
      const startX = Math.random() * 100;
      star.style.left = `${startX}%`;
      star.style.top = '-10px';

      // Random animation duration
      const duration = 1 + Math.random() * 2;
      star.style.animationDuration = `${duration}s`;

      document.querySelector('.home-container')?.appendChild(star);

      // Remove star after animation
      setTimeout(() => {
        star.remove();
      }, duration * 1000);
    };

    // Create shooting stars periodically
    const starInterval = setInterval(createShootingStar, 800);

    return () => {
      clearInterval(starInterval);
    };
  }, []);

  return (
    <div className="home-container">
      <div className="stars-background"></div>
      <div className="home-content">
        <h1 className="home-title">F.R.O.S.T.</h1>
        <p className="home-subtitle">Friendsmas Rivalry of Seasonal Triumph</p>
        <a
          href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=F.R.O.S.T.%202025&dates=20251206T150000/20251206T230000&details=Friendsmas%20Rivalry%20of%20Seasonal%20Triumph%20-%20Annual%20Competition&sf=true"
          target="_blank"
          rel="noopener noreferrer"
          className="home-date-banner"
        >
          <div className="date-icon">📅</div>
          <div className="date-content">
            <p className="date-label">Next Competition</p>
            <p className="date-main">December 6th, 2025</p>
            <p className="date-action">Click to add to calendar →</p>
          </div>
        </a>
        <div className="home-description">
          <p className="magic-text">✨ Welcome to the annual FROST competition! ✨</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
