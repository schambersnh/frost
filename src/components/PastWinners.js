import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PastWinners.css';

const PastWinners = () => {
  const [winners, setWinners] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // TODO: Replace with actual API call
    // Mock data for now
    const mockWinners = [
      {
        year: 2023,
        teamName: 'The Sleigh Slayers',
        players: ['Alice', 'Bob', 'Charlie'],
        score: 1250,
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        year: 2022,
        teamName: 'Jingle Bell Rocks',
        players: ['Dave', 'Eve', 'Frank'],
        score: 1180,
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      }
    ];
    setWinners(mockWinners);
  }, []);

  const handleYearClick = (year) => {
    navigate(`/dashboard/year/${year}`);
  };

  return (
    <div className="past-winners-container">
      <h1 className="page-title">Past Winners</h1>

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
    </div>
  );
};

export default PastWinners;
