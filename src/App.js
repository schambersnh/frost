import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/login"
            element={
              isAuthenticated ?
              <Navigate to="/dashboard" /> :
              <Login setIsAuthenticated={setIsAuthenticated} />
            }
          />
          <Route
            path="/dashboard/*"
            element={
              isAuthenticated ?
              <Dashboard setIsAuthenticated={setIsAuthenticated} /> :
              <Navigate to="/login" />
            }
          />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
