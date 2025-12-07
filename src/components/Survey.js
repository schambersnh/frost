import React from 'react';
import './Survey.css';

const Survey = () => {
  return (
    <div className="survey-container">
      <h1 className="page-title">RSVP</h1>
      <p className="page-subtitle">Please let us know if you can make it!</p>

      <div className="survey-content">
        <div className="survey-card">
          <div className="survey-icon">🎉</div>
          <h2 className="survey-title">Thank You for Attending F.R.O.S.T. 2025!</h2>
          <p className="survey-description">
            Thank you for coming to F.R.O.S.T. 2025! We hope you had an amazing time.
            We will upload a new survey as F.R.O.S.T. 2026 gets closer.
          </p>

          <div className="survey-note">
            Stay tuned for updates about F.R.O.S.T. 2026!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Survey;
