# BravUp Frontend

Modern React frontend for the BravUp Pathfinder Clubs gamification system.

## Features

- 🎯 Complete dashboard with rankings and highlights
- 👥 Member and unit management
- ➕ Advanced point assignment system
- 📊 Real-time rankings and statistics
- 📺 Projector mode for meetings
- 📱 Fully responsive design
- 🎨 Modern UI with TailwindCSS

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **Context API** - State management

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Loading.jsx
│   └── Table.jsx
├── contexts/       # React contexts
│   └── AuthContext.jsx
├── layouts/        # Layout components
│   └── Layout.jsx
├── pages/          # Page components
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── Ranking.jsx
│   └── ...
├── services/       # API services
│   └── api.js
└── main.jsx        # App entry point
```

## API Integration

The frontend connects to the BravUp backend API. Make sure the backend is running on `http://localhost:5000`.

## Features Overview

### Authentication
- JWT-based authentication
- Protected routes
- Auto logout on token expiry

### Dashboard
- Top units and pathfinders
- Recent activities
- Weekly highlights

### Point Management
- Multiple point types selection
- Dynamic total calculation
- Flexible assignment (individual/unit/multiple)
- Observation notes

### Rankings
- Individual and unit rankings
- Medal icons for top positions
- Responsive table design

### Projector Mode
- Full-screen display
- Large typography
- Optimized for presentations
- Real-time updates

## Contributing

1. Follow the existing code style
2. Use meaningful component and variable names
3. Add proper error handling
4. Test on multiple screen sizes
5. Update this README if needed

## License

This project is part of the BravUp system for Pathfinder Clubs.