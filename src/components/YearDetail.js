import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './YearDetail.css';

const YearDetail = () => {
  const { year } = useParams();
  const navigate = useNavigate();
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // TODO: Replace with actual API call
    // Mock data for now
    const mockTeams = [
      {
        place: 1,
        teamName: 'The Sleigh Slayers',
        players: ['Alice', 'Bob', 'Charlie'],
        score: 1250
      },
      {
        place: 2,
        teamName: 'Frosty Fighters',
        players: ['David', 'Emily', 'Frank'],
        score: 1180
      },
      {
        place: 3,
        teamName: 'Holiday Heroes',
        players: ['Grace', 'Henry', 'Isabel'],
        score: 1095
      },
      {
        place: 4,
        teamName: 'Winter Warriors',
        players: ['Jack', 'Kelly', 'Liam'],
        score: 980
      }
    ];
    setTeams(mockTeams);
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
          <div className="col-score">Score</div>
        </div>

        {teams.map((team) => (
          <div key={team.place} className={`table-row place-${team.place}`}>
            <div className="col-place">
              <span className="place-number">{team.place}</span>
              <span className="medal">{getMedalEmoji(team.place)}</span>
            </div>
            <div className="col-team">{team.teamName}</div>
            <div className="col-players">{team.players.join(', ')}</div>
            <div className="col-score">{team.score}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YearDetail;
