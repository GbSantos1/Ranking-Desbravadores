import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo.svg';

const Layout = ({ children }) => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/ranking', label: 'Ranking', icon: '🏆' },
    { path: '/unidades', label: 'Unidades', icon: '🏕️' },
    { path: '/desbravadores', label: 'Desbravadores', icon: '👥' },
    { path: '/pontuacoes', label: 'Pontuações', icon: '⭐' },
    { path: '/adicionar-pontos', label: 'Adicionar Pontos', icon: '➕' },
    { path: '/gincanas', label: 'Gincanas', icon: '🎯' },
    { path: '/relatorios', label: 'Relatórios', icon: '📋' },
    { path: '/projetor', label: 'Modo Projetor', icon: '📺' },
    { path: '/configuracoes', label: 'Configurações', icon: '⚙️' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="BravUp Logo" className="w-10 h-10" />
            <div>
              <h1 className="text-2xl font-bold text-blue-600">BRAVUP</h1>
              <p className="text-sm text-gray-600">Sistema de Gincana</p>
            </div>
          </div>
        </div>
        <nav className="mt-6">
          <ul className="space-y-2 px-4">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'bg-blue-100 text-blue-700 border-r-4 border-blue-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="flex-1">
        <header className="bg-white shadow-sm border-b px-6 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">
              {menuItems.find(item => item.path === location.pathname)?.label || 'Dashboard'}
            </h2>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Olá, {user?.name || 'Usuário'}</span>
              <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
              >
                Sair
              </button>
            </div>
          </div>
        </header>
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;