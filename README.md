# BravUp

BravUp is a ranking and gamification system for Pathfinder Clubs.

## Features

- Club management
- Member management
- Competitions
- Point system
- Rankings
- Projector mode

## Tech Stack

- Backend: Node.js, Express, MySQL, JWT
- Frontend: React, Vite, TailwindCSS

## Setup

### Backend

1. cd backend
2. npm install
3. Set up .env with DB credentials
4. Run schema.sql in MySQL
5. npm run dev

### Frontend

1. cd frontend
2. npm install
3. npm run dev

## API Endpoints

- POST /api/auth/login
- GET /api/clubs
- GET /api/members
- etc.