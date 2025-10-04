import React, { useState } from 'react';
import './AdminPanel.css';

const AdminPanel = () => {
  const [year, setYear] = useState('');
  const [teamName, setTeamName] = useState('');
  const [players, setPlayers] = useState('');
  const [score, setScore] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [isWinner, setIsWinner] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const teamData = {
      year: parseInt(year),
      teamName,
      players: players.split(',').map(p => p.trim()),
      score: parseInt(score),
      videoUrl: videoUrl || null,
      isWinner
    };

    try {
      // TODO: Replace with actual API call
      console.log('Submitting team data:', teamData);

      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 500));

      setMessage('Team data uploaded successfully!');

      // Reset form
      setYear('');
      setTeamName('');
      setPlayers('');
      setScore('');
      setVideoUrl('');
      setIsWinner(false);

      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Error uploading team data. Please try again.');
    }
  };

  return (
    <div className="admin-panel-container">
      <h1 className="page-title">Admin Panel</h1>
      <p className="page-subtitle">Upload team scores and winner information</p>

      <div className="admin-card">
        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-row">
            <div className="form-group">
              <label>Year</label>
              <input
                type="number"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="2024"
                required
                min="2000"
                max="2100"
              />
            </div>

            <div className="form-group">
              <label>Team Name</label>
              <input
                type="text"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                placeholder="The Sleigh Slayers"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Players (comma-separated)</label>
            <input
              type="text"
              value={players}
              onChange={(e) => setPlayers(e.target.value)}
              placeholder="Alice, Bob, Charlie"
              required
            />
          </div>

          <div className="form-group">
            <label>Score</label>
            <input
              type="number"
              value={score}
              onChange={(e) => setScore(e.target.value)}
              placeholder="1250"
              required
              min="0"
            />
          </div>

          <div className="form-group">
            <label>Victory Video URL (optional, YouTube embed URL)</label>
            <input
              type="url"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="https://www.youtube.com/embed/..."
            />
          </div>

          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={isWinner}
                onChange={(e) => setIsWinner(e.target.checked)}
              />
              <span>Mark as Winner</span>
            </label>
          </div>

          {message && (
            <div className={`message ${message.includes('Error') ? 'error' : 'success'}`}>
              {message}
            </div>
          )}

          <button type="submit" className="submit-button">
            Upload Team Data
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPanel;
