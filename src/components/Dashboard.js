import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import PastWinners from './PastWinners';
import PastScores from './PastScores';
import YearDetail from './YearDetail';
import Gallery from './Gallery';
import About from './About';
import './Dashboard.css';

const Dashboard = () => {
  useEffect(() => {
    // Create subtle snowflakes for dashboard
    const snowContainer = document.querySelector('.dashboard-snow-container');
    if (!snowContainer) return;

    const snowflakeCount = 50;

    for (let i = 0; i < snowflakeCount; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'dashboard-snowflake';
      snowflake.innerHTML = '❅';
      snowflake.style.left = Math.random() * 100 + '%';
      snowflake.style.animationDuration = (Math.random() * 4 + 3) + 's';
      snowflake.style.animationDelay = Math.random() * 5 + 's';
      snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';
      snowflake.style.opacity = Math.random() * 0.5 + 0.3;
      snowContainer.appendChild(snowflake);
    }
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-snow-container"></div>
      <nav className="dashboard-nav">
        <div className="nav-brand">
          <Link to="/" className="brand-link">
            <h1>F.R.O.S.T.</h1>
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/winners" className="nav-link">Past Winners</Link>
          <Link to="/scores" className="nav-link">Past Scores</Link>
          <Link to="/gallery" className="nav-link">Gallery</Link>
        </div>
      </nav>

      <div className="dashboard-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/winners" element={<PastWinners />} />
          <Route path="/scores" element={<PastScores />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/year/:year" element={<YearDetail />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
