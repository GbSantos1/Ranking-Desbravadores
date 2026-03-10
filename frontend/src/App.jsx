import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Ranking from './pages/Ranking';
import Units from './pages/Units';
import Pathfinders from './pages/Pathfinders';
import PointTypes from './pages/PointTypes';
import AddPoints from './pages/AddPoints';
import Competitions from './pages/Competitions';
import Reports from './pages/Reports';
import ProjectorMode from './pages/ProjectorMode';
import Settings from './pages/Settings';
import Layout from './layouts/Layout';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/projector" element={<ProjectorMode />} />
          <Route path="/*" element={
            <ProtectedRoute>
              <Layout>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/ranking" element={<Ranking />} />
                  <Route path="/units" element={<Units />} />
                  <Route path="/pathfinders" element={<Pathfinders />} />
                  <Route path="/point-types" element={<PointTypes />} />
                  <Route path="/add-points" element={<AddPoints />} />
                  <Route path="/competitions" element={<Competitions />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </Layout>
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;