import React, { useState, useEffect } from 'react';
import './PastScores.css';
import teamsData from '../data/teams.json';

const PastScores = () => {
  const [scoresByYear, setScoresByYear] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchScores();
  }, []);

  const fetchScores = () => {
    try {
      // Load data from local JSON, filter out years with no teams, and sort by year descending
      const filteredData = teamsData.years.filter(yearData => yearData.teams && yearData.teams.length > 0);
      const sortedData = [...filteredData].sort((a, b) => b.year - a.year);
      setScoresByYear(sortedData);
      setLoading(false);
    } catch (error) {
      console.error('Error loading scores:', error);
      setLoading(false);
    }
  };

  const getTrophyEmoji = (place) => {
    switch (place) {
      case 1:
        return '🥇';
      case 2:
        return '🥈';
      case 3:
        return '🥉';
      default:
        return '';
    }
  };

  if (loading) {
    return <div className="loading">Loading scores...</div>;
  }

  return (
    <div className="past-scores-container">
      <h1 className="page-title">Past Scores</h1>
      <p className="page-subtitle">Complete history of all teams and their performances</p>

      <div className="scores-list">
        {scoresByYear.map((yearData) => (
          <div key={yearData.year} className="year-section">
            <h2 className="year-header">{yearData.year}</h2>

            <div className="teams-table">
              <div className="table-header">
                <div className="col-place">Place</div>
                <div className="col-team">Team</div>
                <div className="col-players">Players</div>
                <div className="col-game">G1</div>
                <div className="col-game">G2</div>
                <div className="col-game">G3</div>
                <div className="col-game">G4</div>
                <div className="col-game">G5</div>
                <div className="col-game">G6</div>
                <div className="col-score">Total</div>
              </div>

              {yearData.teams.map((team) => (
                <div key={`${yearData.year}-${team.teamName}`} className="team-row">
                  <div className="col-place">
                    <span className="trophy">{getTrophyEmoji(team.place)}</span>
                    <span className="place-number">{team.place}</span>
                    {team.isCookieWinner && <span className="cookie-winner-badge">🍪</span>}
                  </div>
                  <div className="col-team">{team.teamName}</div>
                  <div className="col-players">{team.players.join(', ')}</div>
                  {team.gameScores && team.gameScores.map((score, idx) => (
                    <div key={idx} className="col-game">{score}</div>
                  ))}
                  {!team.gameScores && (
                    <>
                      <div className="col-game">-</div>
                      <div className="col-game">-</div>
                      <div className="col-game">-</div>
                      <div className="col-game">-</div>
                      <div className="col-game">-</div>
                      <div className="col-game">-</div>
                    </>
                  )}
                  <div className="col-score">
                    {team.score}
                    {team.cookieBonus > 0 && <span className="bonus-indicator"> (+{team.cookieBonus})</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastScores;
