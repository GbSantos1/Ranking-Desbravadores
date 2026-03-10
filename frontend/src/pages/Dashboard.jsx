import { useEffect, useState } from 'react';
import Layout from '../layouts/Layout';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/login';
      return;
    }
    setUser({ name: 'Usuário' });
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Dashboard da Gincana</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Ranking Atual</h2>
          <ul>
            <li>🥇 Águias - 1450 pts</li>
            <li>🥈 Tigres - 1320 pts</li>
            <li>🥉 Leões - 1200 pts</li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">⭐ Desbravador Destaque</h2>
          <p>João - 320 pts</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">🏕️ Unidade Destaque</h2>
          <p>Águias</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Últimas Pontuações Registradas</h2>
        <ul>
          <li>+90 Classe bíblica - João</li>
          <li>+40 Caderno de classe - Maria</li>
          <li>-50 Esqueceu Bíblia - Pedro</li>
        </ul>
      </div>
    </Layout>
  );
};

export default Dashboard;