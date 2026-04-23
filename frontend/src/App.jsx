import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Ranking from './pages/Ranking.jsx'
import Units from './pages/Units.jsx'
import Pathfinders from './pages/Pathfinders.jsx'
import { AuthProvider, useAuth } from './contexts/AuthContext.jsx'

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()
  
  if (loading) {
    return (
      <div className="loading">
        <div>Carregando...</div>
      </div>
    )
  }
  
  return user ? children : <Navigate to="/login" />
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/ranking" element={
              <ProtectedRoute>
                <Ranking />
              </ProtectedRoute>
            } />
            <Route path="/units" element={
              <ProtectedRoute>
                <Units />
              </ProtectedRoute>
            } />
            <Route path="/pathfinders" element={
              <ProtectedRoute>
                <Pathfinders />
              </ProtectedRoute>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
