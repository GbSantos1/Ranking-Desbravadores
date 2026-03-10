import { useState, useEffect } from 'react';
import Card from '../components/Card';
import Table from '../components/Table';
import Loading from '../components/Loading';

const Ranking = () => {
  const [rankings, setRankings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('individual');

  useEffect(() => {
    // Mock data - replace with actual API calls
    setTimeout(() => {
      setRankings({
        individual: [
          ['1º', 'João', 'Águias', '450'],
          ['2º', 'Maria', 'Tigres', '420'],
          ['3º', 'Pedro', 'Leões', '390'],
          ['4º', 'Lucas', 'Águias', '350'],
          ['5º', 'Ana', 'Tigres', '320'],
        ],
        units: [
          ['1º', 'Águias', '1450'],
          ['2º', 'Tigres', '1320'],
          ['3º', 'Leões', '1200'],
          ['4º', 'Falcões', '1100'],
          ['5º', 'Lobos', '950'],
        ],
      });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Loading text="Carregando rankings..." />;
  }

  const getMedalIcon = (position) => {
    const pos = parseInt(position);
    switch (pos) {
      case 1: return '🥇';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return position;
    }
  };

  const individualHeaders = ['Posição', 'Desbravador', 'Unidade', 'Pontos'];
  const unitHeaders = ['Posição', 'Unidade', 'Pontos'];

  const individualData = rankings.individual.map(row => [
    <span className="flex items-center">
      <span className="mr-2">{getMedalIcon(row[0])}</span>
      {row[0]}
    </span>,
    row[1],
    row[2],
    <span className="font-bold text-blue-600">{row[3]}</span>
  ]);

  const unitData = rankings.units.map(row => [
    <span className="flex items-center">
      <span className="mr-2">{getMedalIcon(row[0])}</span>
      {row[0]}
    </span>,
    row[1],
    <span className="font-bold text-orange-600">{row[2]}</span>
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Rankings</h1>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex">
            <button
              onClick={() => setActiveTab('individual')}
              className={`px-6 py-3 text-sm font-medium border-b-2 ${
                activeTab === 'individual'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              👤 Ranking Individual
            </button>
            <button
              onClick={() => setActiveTab('units')}
              className={`px-6 py-3 text-sm font-medium border-b-2 ${
                activeTab === 'units'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              🏕️ Ranking por Unidades
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'individual' ? (
            <Card>
              <h2 className="text-xl font-semibold mb-4 text-gray-800">🏆 Ranking Individual</h2>
              <Table headers={individualHeaders} data={individualData} />
            </Card>
          ) : (
            <Card>
              <h2 className="text-xl font-semibold mb-4 text-gray-800">🏕️ Ranking por Unidades</h2>
              <Table headers={unitHeaders} data={unitData} />
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ranking;