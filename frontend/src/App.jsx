import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/units" element={<Units />} />
        <Route path="/pathfinders" element={<Pathfinders />} />
        <Route path="/point-types" element={<PointTypes />} />
        <Route path="/add-points" element={<AddPoints />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/projector" element={<ProjectorMode />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;