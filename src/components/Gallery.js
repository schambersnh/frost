import React from 'react';
import './Gallery.css';
import teamsData from '../data/teams.json';

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h1 className="page-title">Photo Gallery</h1>
      <p className="page-subtitle">Memories from past competitions</p>

      <div className="gallery-years">
        {teamsData.years.map((yearData) => (
          <div key={yearData.year} className="gallery-year-section">
            <h2 className="year-header">{yearData.year} Photos</h2>

            {yearData.galleryUrl ? (
              <div className="gallery-link-section">
                <div className="gallery-preview">
                  <div className="gallery-icon">📸</div>
                  <h3>View {yearData.year} Photos</h3>
                  <p>Check out all the memorable moments from this year's competition</p>
                </div>
                <a
                  href={yearData.galleryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gallery-button"
                >
                  <span className="gallery-button-icon">🖼️</span>
                  Open Photo Album
                  <span className="gallery-button-arrow">→</span>
                </a>
              </div>
            ) : yearData.uploadUrl ? (
              <div className="gallery-upload-section">
                <div className="upload-placeholder">
                  <div className="construction-icon">🚧</div>
                  <h3>Memories in Progress</h3>
                  <p>Help us build the {yearData.year} gallery!</p>
                </div>
                <a
                  href={yearData.uploadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="upload-button"
                >
                  <span className="upload-icon">📷</span>
                  Upload Your Photos
                  <span className="upload-arrow">→</span>
                </a>
              </div>
            ) : (
              <div className="no-gallery-placeholder">
                <div className="placeholder-icon">📸</div>
                <p>No photos available for this year yet</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
