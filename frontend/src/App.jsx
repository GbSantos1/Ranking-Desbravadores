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

const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <Routes>
      {/* Rota raiz - redireciona baseado na autenticação */}
      <Route path="/" element={
        user ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
      } />

      {/* Página de login - acessível sem autenticação */}
      <Route path="/login" element={
        user ? <Navigate to="/dashboard" /> : <Login />
      } />

      {/* Modo projetor - acessível sem autenticação */}
      <Route path="/projetor" element={<ProjectorMode />} />

      {/* Rotas protegidas */}
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Layout>
            <Dashboard />
          </Layout>
        </ProtectedRoute>
      } />
      <Route path="/ranking" element={
        <ProtectedRoute>
          <Layout>
            <Ranking />
          </Layout>
        </ProtectedRoute>
      } />
      <Route path="/unidades" element={
        <ProtectedRoute>
          <Layout>
            <Units />
          </Layout>
        </ProtectedRoute>
      } />
      <Route path="/desbravadores" element={
        <ProtectedRoute>
          <Layout>
            <Pathfinders />
          </Layout>
        </ProtectedRoute>
      } />
      <Route path="/pontuacoes" element={
        <ProtectedRoute>
          <Layout>
            <PointTypes />
          </Layout>
        </ProtectedRoute>
      } />
      <Route path="/adicionar-pontos" element={
        <ProtectedRoute>
          <Layout>
            <AddPoints />
          </Layout>
        </ProtectedRoute>
      } />
      <Route path="/gincanas" element={
        <ProtectedRoute>
          <Layout>
            <Competitions />
          </Layout>
        </ProtectedRoute>
      } />
      <Route path="/relatorios" element={
        <ProtectedRoute>
          <Layout>
            <Reports />
          </Layout>
        </ProtectedRoute>
      } />
      <Route path="/configuracoes" element={
        <ProtectedRoute>
          <Layout>
            <Settings />
          </Layout>
        </ProtectedRoute>
      } />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
      </Router>
    </AuthProvider>
  );
}

export default App;