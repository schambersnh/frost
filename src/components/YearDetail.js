import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './YearDetail.css';
import teamsData from '../data/teams.json';

const YearDetail = () => {
  const { year } = useParams();
  const navigate = useNavigate();
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // Find the year data from local JSON
    const yearData = teamsData.years.find(y => y.year === parseInt(year));
    if (yearData) {
      setTeams(yearData.teams);
    } else {
      setTeams([]);
    }
  }, [year]);

  const getMedalEmoji = (place) => {
    switch (place) {
      case 1: return '🥇';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return '';
    }
  };

  return (
    <div className="year-detail-container">
      <button onClick={() => navigate('/dashboard/winners')} className="back-button">
        ← Back to Winners
      </button>

      <h1 className="year-title">{year} Competition Results</h1>

      <div className="teams-table">
        <div className="table-header">
          <div className="col-place">Place</div>
          <div className="col-team">Team Name</div>
          <div className="col-players">Players</div>
          <div className="col-game">G1</div>
          <div className="col-game">G2</div>
          <div className="col-game">G3</div>
          <div className="col-game">G4</div>
          <div className="col-game">G5</div>
          <div className="col-game">G6</div>
          <div className="col-score">Total</div>
        </div>

        {teams.map((team) => (
          <div key={team.teamId} className={`table-row place-${team.place}`}>
            <div className="col-place">
              <span className="place-number">{team.place}</span>
              <span className="medal">{getMedalEmoji(team.place)}</span>
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
  );
};

export default YearDetail;
