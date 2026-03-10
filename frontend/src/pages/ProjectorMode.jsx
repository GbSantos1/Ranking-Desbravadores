import { useState, useEffect } from 'react';

const ProjectorMode = () => {
  const [rankings, setRankings] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Mock data
    setRankings({
      units: [
        { position: 1, name: 'ÁGUIAS', points: 1450 },
        { position: 2, name: 'TIGRES', points: 1320 },
        { position: 3, name: 'LEÕES', points: 1200 },
        { position: 4, name: 'FALCÕES', points: 1100 },
        { position: 5, name: 'LOBOS', points: 950 },
        { position: 6, name: 'URSOS', points: 800 },
        { position: 7, name: 'PANDAS', points: 750 },
        { position: 8, name: 'GUEPARDOS', points: 700 },
        { position: 9, name: 'JAVALIS', points: 650 },
        { position: 10, name: 'RAPOSAS', points: 600 },
      ],
      pathfinders: [
        { position: 1, name: 'João', unit: 'Águias', points: 320 },
        { position: 2, name: 'Maria', unit: 'Tigres', points: 290 },
        { position: 3, name: 'Pedro', unit: 'Leões', points: 280 },
        { position: 4, name: 'Lucas', unit: 'Águias', points: 270 },
        { position: 5, name: 'Ana', unit: 'Tigres', points: 260 },
        { position: 6, name: 'Carlos', unit: 'Falcões', points: 250 },
        { position: 7, name: 'Beatriz', unit: 'Lobos', points: 240 },
        { position: 8, name: 'Rafael', unit: 'Ursos', points: 230 },
        { position: 9, name: 'Sofia', unit: 'Pandas', points: 220 },
        { position: 10, name: 'Miguel', unit: 'Guepardos', points: 210 },
      ],
      pathfinderOfWeek: { name: 'João', points: 320 },
      unitOfWeek: { name: 'ÁGUIAS', points: 1450 },
    });

    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getMedalIcon = (position) => {
    switch (position) {
      case 1: return '🥇';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return `${position}º`;
    }
  };

  if (!rankings) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-4xl">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Header */}
      <div className="text-center py-8">
        <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 mb-4">
          BRAVUP
        </h1>
        <h2 className="text-5xl font-bold text-blue-300 mb-2">
          Ranking da Gincana
        </h2>
        <div className="text-2xl text-gray-300">
          {currentTime.toLocaleDateString('pt-BR')} - {currentTime.toLocaleTimeString('pt-BR')}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Units Ranking */}
        <div className="bg-black bg-opacity-50 rounded-2xl p-8 backdrop-blur-sm">
          <h3 className="text-4xl font-bold text-center mb-6 text-yellow-400">
            🏆 UNIDADES
          </h3>
          <div className="space-y-4">
            {rankings.units.slice(0, 10).map((unit, index) => (
              <div
                key={unit.position}
                className={`flex items-center justify-between p-4 rounded-xl transition-all duration-500 ${
                  index < 3
                    ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 text-black shadow-2xl'
                    : 'bg-gray-800 bg-opacity-70 hover:bg-opacity-80'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">{getMedalIcon(unit.position)}</span>
                  <span className="text-2xl font-bold">{unit.name}</span>
                </div>
                <span className="text-3xl font-black">{unit.points}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pathfinders Ranking */}
        <div className="bg-black bg-opacity-50 rounded-2xl p-8 backdrop-blur-sm">
          <h3 className="text-4xl font-bold text-center mb-6 text-green-400">
            👤 DESBRAVADORES
          </h3>
          <div className="space-y-3">
            {rankings.pathfinders.slice(0, 10).map((pathfinder, index) => (
              <div
                key={pathfinder.position}
                className={`flex items-center justify-between p-3 rounded-lg transition-all duration-500 ${
                  index < 3
                    ? 'bg-gradient-to-r from-green-600 to-green-500 text-black'
                    : 'bg-gray-800 bg-opacity-70 hover:bg-opacity-80'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xl">{getMedalIcon(pathfinder.position)}</span>
                  <div>
                    <span className="text-xl font-bold block">{pathfinder.name}</span>
                    <span className="text-sm opacity-75">{pathfinder.unit}</span>
                  </div>
                </div>
                <span className="text-2xl font-bold">{pathfinder.points}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="max-w-7xl mx-auto px-8 mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Pathfinder of the Week */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center">
          <div className="text-6xl mb-4">⭐</div>
          <h3 className="text-3xl font-bold mb-2">Desbravador Destaque</h3>
          <div className="text-5xl font-black mb-1">{rankings.pathfinderOfWeek.name}</div>
          <div className="text-2xl">{rankings.pathfinderOfWeek.points} pontos</div>
        </div>

        {/* Unit of the Week */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-center">
          <div className="text-6xl mb-4">🏕️</div>
          <h3 className="text-3xl font-bold mb-2">Unidade Destaque</h3>
          <div className="text-5xl font-black mb-1">{rankings.unitOfWeek.name}</div>
          <div className="text-2xl">{rankings.unitOfWeek.points} pontos</div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-8">
        <p className="text-xl text-gray-400">
          Sistema de Gincana para Desbravadores • BravUp
        </p>
      </div>
    </div>
  );
};

export default ProjectorMode;