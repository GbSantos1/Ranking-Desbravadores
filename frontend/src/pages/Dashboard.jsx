import { useState, useEffect } from 'react';
import Card from '../components/Card';
import Loading from '../components/Loading';

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data - replace with actual API calls
    setTimeout(() => {
      setStats({
        topUnits: [
          { name: 'Águias', points: 1450, position: 1 },
          { name: 'Tigres', points: 1320, position: 2 },
          { name: 'Leões', points: 1200, position: 3 },
        ],
        topPathfinders: [
          { name: 'João', unit: 'Águias', points: 320 },
          { name: 'Maria', unit: 'Tigres', points: 290 },
          { name: 'Pedro', unit: 'Leões', points: 280 },
        ],
        recentActivities: [
          { description: '+90 Classe bíblica - João', time: '2h atrás' },
          { description: '+40 Caderno de classe - Maria', time: '4h atrás' },
          { description: '-50 Esqueceu Bíblia - Pedro', time: '6h atrás' },
        ],
        pathfinderOfWeek: { name: 'João', points: 320 },
        unitOfWeek: { name: 'Águias', points: 1450 },
      });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Loading text="Carregando dashboard..." />;
  }

  const getMedalIcon = (position) => {
    switch (position) {
      case 1: return '🥇';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return '🏅';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard da Gincana</h1>
      </div>

      {/* Top Units */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">🏆 Top Unidades</h2>
          <div className="space-y-3">
            {stats.topUnits.map((unit) => (
              <div key={unit.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{getMedalIcon(unit.position)}</span>
                  <div>
                    <p className="font-medium text-gray-900">{unit.name}</p>
                    <p className="text-sm text-gray-600">{unit.position}º lugar</p>
                  </div>
                </div>
                <span className="text-lg font-bold text-blue-600">{unit.points} pts</span>
              </div>
            ))}
          </div>
        </Card>

        <div className="space-y-6">
          {/* Pathfinder of the Week */}
          <Card>
            <h2 className="text-lg font-semibold mb-3 text-gray-800">⭐ Desbravador Destaque</h2>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">👤</span>
              </div>
              <p className="font-medium text-gray-900">{stats.pathfinderOfWeek.name}</p>
              <p className="text-sm text-gray-600">{stats.pathfinderOfWeek.points} pontos</p>
            </div>
          </Card>

          {/* Unit of the Week */}
          <Card>
            <h2 className="text-lg font-semibold mb-3 text-gray-800">🏕️ Unidade Destaque</h2>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">🏕️</span>
              </div>
              <p className="font-medium text-gray-900">{stats.unitOfWeek.name}</p>
              <p className="text-sm text-gray-600">{stats.unitOfWeek.points} pontos</p>
            </div>
          </Card>
        </div>
      </div>

      {/* Recent Activities */}
      <Card>
        <h2 className="text-xl font-semibold mb-4 text-gray-800">📋 Atividades Recentes</h2>
        <div className="space-y-3">
          {stats.recentActivities.map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-900">{activity.description}</span>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;