import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import PastWinners from './PastWinners';
import YearDetail from './YearDetail';
import AdminPanel from './AdminPanel';
import './Dashboard.css';

const Dashboard = ({ setIsAuthenticated }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <div className="nav-brand">
          <h1>FROST</h1>
        </div>
        <div className="nav-links">
          <Link to="/dashboard/winners" className="nav-link">Past Winners</Link>
          {isAdmin && <Link to="/dashboard/admin" className="nav-link">Admin</Link>}
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
      </nav>

      <div className="dashboard-content">
        <Routes>
          <Route index element={<PastWinners />} />
          <Route path="winners" element={<PastWinners />} />
          <Route path="year/:year" element={<YearDetail />} />
          <Route path="admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
