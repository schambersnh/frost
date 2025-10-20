import React from 'react';
import './Survey.css';

const Survey = () => {
  return (
    <div className="survey-container">
      <h1 className="page-title">RSVP</h1>
      <p className="page-subtitle">Please let us know if you can make it!</p>

      <div className="survey-content">
        <div className="survey-card">
          <div className="survey-icon">✉️</div>
          <h2 className="survey-title">RSVP for F.R.O.S.T. 2025</h2>
          <p className="survey-description">
            Please fill out this form whether you're attending or not! If you are coming,
            let us know your team name and overnight plans. If you can't make it, we'd still
            love to hear from you so we can plan accordingly.
          </p>

          <div className="survey-features">
            <div className="feature-item">
              <span className="feature-icon">✅</span>
              <span className="feature-text">Confirm attendance (yes or no)</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">👥</span>
              <span className="feature-text">Share team details (if attending)</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🛏️</span>
              <span className="feature-text">Indicate overnight plans (if attending)</span>
            </div>
          </div>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfcCnY4w_A-5tpiTf3zblVayRmCrGcrK0Ga8T7TknsUGM8gSg/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="survey-button"
          >
            <span className="button-icon">📝</span>
            Submit RSVP
            <span className="button-arrow">→</span>
          </a>

          <p className="survey-note">
            Opens in a new tab • Please respond even if you cannot attend!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Survey;
