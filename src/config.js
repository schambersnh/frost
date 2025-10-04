// API Configuration
// After deploying the backend, update this with your API Gateway URL
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

// API Endpoints
export const API_ENDPOINTS = {
  getWinners: `${API_BASE_URL}/winners`,
  getYearDetails: (year) => `${API_BASE_URL}/year/${year}`,
  uploadTeam: `${API_BASE_URL}/admin/upload`,
};
