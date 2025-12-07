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
        <div className="home-date-section">
          <div className="date-header">
            <div className="date-icon">📅</div>
            <div className="date-content">
              <p className="date-label">Next Competition</p>
              <p className="date-main">December 12th, 2026 at 3:00PM</p>
            </div>
          </div>
          <div className="calendar-buttons">
            <a
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=F.R.O.S.T.%202026&dates=20261212T150000/20261212T230000&details=Friendsmas%20Rivalry%20of%20Seasonal%20Triumph%20-%20Annual%20Competition&location=Stephen%20and%20Tiffany%27s%20House&sf=true"
              target="_blank"
              rel="noopener noreferrer"
              className="calendar-button google"
            >
              <span className="calendar-icon">🗓️</span>
              Add to Google Calendar
            </a>
            <a
              href="data:text/calendar;charset=utf-8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ADTSTART:20261212T150000%0ADTEND:20261212T230000%0ASUMMARY:F.R.O.S.T. 2026%0ADESCRIPTION:Friendsmas Rivalry of Seasonal Triumph - Annual Competition%0ALOCATION:Stephen and Tiffany's House%0AEND:VEVENT%0AEND:VCALENDAR"
              download="frost-2026.ics"
              className="calendar-button apple"
            >
              <span className="calendar-icon">📱</span>
              Add to Apple Calendar
            </a>
          </div>
        </div>
        <div className="home-description">
          <p className="magic-text">✨ Welcome to the annual FROST competition! ✨</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
