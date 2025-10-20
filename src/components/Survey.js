import React from 'react';
import './Survey.css';

const Survey = () => {
  return (
    <div className="survey-container">
      <h1 className="page-title">Registration Survey</h1>
      <p className="page-subtitle">Let us know you're coming!</p>

      <div className="survey-content">
        <div className="survey-card">
          <div className="survey-icon">📝</div>
          <h2 className="survey-title">Register Your Team</h2>
          <p className="survey-description">
            Planning to attend F.R.O.S.T. 2025? Fill out this quick form to let us know
            who's coming, your team name, and whether you'll be staying overnight.
          </p>

          <div className="survey-features">
            <div className="feature-item">
              <span className="feature-icon">👥</span>
              <span className="feature-text">Register your team</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✏️</span>
              <span className="feature-text">Choose your team name</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🛏️</span>
              <span className="feature-text">Indicate overnight plans</span>
            </div>
          </div>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfcCnY4w_A-5tpiTf3zblVayRmCrGcrK0Ga8T7TknsUGM8gSg/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="survey-button"
          >
            <span className="button-icon">📋</span>
            Complete Registration
            <span className="button-arrow">→</span>
          </a>

          <p className="survey-note">
            Opens in a new tab • Help us plan an amazing competition!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Survey;
