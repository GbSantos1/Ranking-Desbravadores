import { Link, useNavigate } from 'react-router-dom';

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-blue-600">BRAVUP</h1>
        </div>
        <nav className="mt-4">
          <ul>
            <li><Link to="/" className="block px-4 py-2 hover:bg-gray-200">Dashboard</Link></li>
            <li><Link to="/ranking" className="block px-4 py-2 hover:bg-gray-200">Ranking</Link></li>
            <li><Link to="/units" className="block px-4 py-2 hover:bg-gray-200">Unidades</Link></li>
            <li><Link to="/pathfinders" className="block px-4 py-2 hover:bg-gray-200">Desbravadores</Link></li>
            <li><Link to="/point-types" className="block px-4 py-2 hover:bg-gray-200">Pontuações</Link></li>
            <li><Link to="/add-points" className="block px-4 py-2 hover:bg-gray-200">Adicionar Pontos</Link></li>
            <li><Link to="/competitions" className="block px-4 py-2 hover:bg-gray-200">Gincanas</Link></li>
            <li><Link to="/reports" className="block px-4 py-2 hover:bg-gray-200">Relatórios</Link></li>
            <li><Link to="/projector" className="block px-4 py-2 hover:bg-gray-200">Modo Projetor</Link></li>
            <li><Link to="/settings" className="block px-4 py-2 hover:bg-gray-200">Configurações</Link></li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-4">
        <header className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Sistema de Gincana para Desbravadores</h2>
          <div>
            <span className="mr-4">[Usuário]</span>
            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
};

export default Layout;