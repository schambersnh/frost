# FROST Frontend

Christmas-themed competition tracker for the Friendsmas Rivalry of Seasonal Triumph.

## Features

- ❄️ Christmas-themed login with snow animation
- 🏆 Past Winners display with embedded victory videos
- 📊 Year detail view showing all team scores
- 👨‍💼 Admin panel for uploading team data

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Installation

```bash
npm install
```

## Running the App

```bash
npm start
```

The app will open at http://localhost:3000

## Default Login

Password: `frost2024`

## Configuration

To connect to your deployed backend API, update the API endpoints in:
- `src/components/PastWinners.js`
- `src/components/YearDetail.js`
- `src/components/AdminPanel.js`

Replace the mock data fetching with actual API calls to your API Gateway URL.

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` directory.

## Project Structure

```
src/
├── components/
│   ├── Login.js          # Login page with snow animation
│   ├── Dashboard.js      # Main dashboard with navigation
│   ├── PastWinners.js    # Winners display with videos
│   ├── YearDetail.js     # All teams for a specific year
│   └── AdminPanel.js     # Upload team scores
├── App.js                # Main app with routing
└── index.js              # Entry point
```
