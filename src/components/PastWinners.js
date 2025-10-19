import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PastWinners.css';
import teamsData from '../data/teams.json';

const PastWinners = () => {
  const [activeTab, setActiveTab] = useState('overall');
  const [winners, setWinners] = useState([]);
  const [cookieWinners, setCookieWinners] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Get all overall winners from the data
    const allWinners = teamsData.years
      .map(yearData => {
        const winner = yearData.teams.find(team => team.isWinner);
        return winner ? { ...winner, year: yearData.year } : null;
      })
      .filter(winner => winner !== null)
      .sort((a, b) => b.year - a.year); // Sort by year descending

    setWinners(allWinners);

    // Get all cookie winners from the data
    const allCookieWinners = teamsData.years
      .filter(yearData => yearData.cookieWinner)
      .map(yearData => ({
        year: yearData.year,
        ...yearData.cookieWinner
      }))
      .sort((a, b) => b.year - a.year); // Sort by year descending

    setCookieWinners(allCookieWinners);
  }, []);

  const handleYearClick = (year) => {
    navigate(`/dashboard/year/${year}`);
  };

  return (
    <div className="past-winners-container">
      <h1 className="page-title">Past Winners</h1>

      <div className="tabbed-content">
        <div className="tab-sidebar">
          <button
            className={`tab-button ${activeTab === 'overall' ? 'active' : ''}`}
            onClick={() => setActiveTab('overall')}
          >
            Overall
          </button>
          <button
            className={`tab-button ${activeTab === 'cookie' ? 'active' : ''}`}
            onClick={() => setActiveTab('cookie')}
          >
            Cookie
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'overall' && (
            <div className="winners-list">
              {winners.map((winner) => (
                <div key={winner.year} className="winner-card">
                  <div className="winner-header">
                    <h2
                      className="winner-year clickable"
                      onClick={() => handleYearClick(winner.year)}
                      title="Click to see all teams for this year"
                    >
                      {winner.year}
                    </h2>
                    <div className="trophy">🏆</div>
                  </div>

                  <div className="winner-info">
                    <h3 className="team-name">{winner.teamName}</h3>
                    <div className="players">
                      {winner.players.join(', ')}
                    </div>
                    <div className="score">Score: {winner.score}</div>
                  </div>

                  {winner.videoUrl && (
                    <div className="video-container">
                      <h4>Victory Roast</h4>
                      <iframe
                        src={winner.videoUrl}
                        title={`${winner.year} Victory Video`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="victory-video"
                      ></iframe>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'cookie' && (
            <div className="cookie-winners-list">
              {cookieWinners.map((winner) => (
                <div key={winner.year} className="cookie-winner-card">
                  <div className="cookie-winner-header">
                    <h2 className="winner-year">{winner.year}</h2>
                    <div className="cookie-icon">🍪</div>
                  </div>
                  <div className="cookie-winner-content">
                    <h3 className="cookie-winner-name">{winner.name}</h3>
                    <div className="cookie-images-container">
                      {winner.imageUrl ? (
                        <div className="cookie-image-wrapper">
                          <img
                            src={winner.imageUrl}
                            alt={`${winner.name} - ${winner.year} Cookie Winner`}
                            className="cookie-winner-image"
                          />
                        </div>
                      ) : (
                        <div className="no-image-placeholder">
                          <div className="placeholder-icon">🍪</div>
                          <p>No winner image</p>
                        </div>
                      )}
                      {winner.cookieImageUrl ? (
                        <div className="cookie-image-wrapper">
                          <img
                            src={winner.cookieImageUrl}
                            alt={`${winner.name} - ${winner.year} Cookie`}
                            className="cookie-winner-image"
                          />
                        </div>
                      ) : (
                        <div className="no-image-placeholder">
                          <div className="placeholder-icon">🍪</div>
                          <p>No cookie image</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PastWinners;
