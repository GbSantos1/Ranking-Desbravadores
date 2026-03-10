import { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const AddPoints = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [applyTo, setApplyTo] = useState('');
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [observation, setObservation] = useState('');
  const [loading, setLoading] = useState(false);

  const pointTypes = [
    { id: 1, name: 'Classe bíblica', points: 90, type: 'positive' },
    { id: 2, name: 'Fazendo caderno/cartão de classe', points: 40, type: 'positive' },
    { id: 3, name: 'Unidade completa no horário', points: 70, type: 'positive' },
    { id: 4, name: 'Trouxe aspirante por 3 domingos', points: 60, type: 'positive' },
    { id: 5, name: 'Esqueceu Bíblia', points: -50, type: 'negative' },
    { id: 6, name: 'Esqueceu livro da classe bíblica', points: -70, type: 'negative' },
    { id: 7, name: 'Unidade faltando membros', points: -40, type: 'negative' },
  ];

  const members = [
    { id: 1, name: 'João', unit: 'Águias' },
    { id: 2, name: 'Maria', unit: 'Tigres' },
    { id: 3, name: 'Pedro', unit: 'Leões' },
    { id: 4, name: 'Lucas', unit: 'Águias' },
  ];

  const units = [
    { id: 1, name: 'Águias' },
    { id: 2, name: 'Tigres' },
    { id: 3, name: 'Leões' },
  ];

  const calculatedTotal = selectedTypes.reduce((sum, type) => sum + type.points, 0);

  const handleTypeSelect = (type) => {
    if (selectedTypes.find(t => t.id === type.id)) {
      setSelectedTypes(selectedTypes.filter(t => t.id !== type.id));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const handleMemberSelect = (memberId) => {
    if (selectedMembers.includes(memberId)) {
      setSelectedMembers(selectedMembers.filter(id => id !== memberId));
    } else {
      setSelectedMembers([...selectedMembers, memberId]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedTypes.length === 0) {
      alert('Selecione pelo menos um tipo de pontuação');
      return;
    }
    if (!applyTo) {
      alert('Selecione para quem aplicar os pontos');
      return;
    }

    setLoading(true);

    // Mock API call
    setTimeout(() => {
      alert('Pontos registrados com sucesso!');
      setSelectedTypes([]);
      setApplyTo('');
      setSelectedMembers([]);
      setObservation('');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Adicionar Pontos</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Point Types Selection */}
        <Card>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">🎯 Tipos de Pontuação</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {pointTypes.map((type) => (
              <label
                key={type.id}
                className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                  selectedTypes.find(t => t.id === type.id)
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedTypes.some(t => t.id === type.id)}
                  onChange={() => handleTypeSelect(type)}
                  className="mr-3"
                />
                <div className="flex-1">
                  <span className="font-medium">{type.name}</span>
                  <span className={`ml-2 px-2 py-1 text-xs rounded ${
                    type.type === 'positive'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {type.points > 0 ? '+' : ''}{type.points}
                  </span>
                </div>
              </label>
            ))}
          </div>

          <Button
            type="button"
            variant="outline"
            onClick={() => alert('Funcionalidade para adicionar novo tipo de pontuação')}
          >
            + Adicionar tipo de pontuação
          </Button>
        </Card>

        {/* Total Points */}
        <Card>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">📊 Pontos a Receber</h2>
          <div className="text-center">
            <span className={`text-4xl font-bold ${
              calculatedTotal > 0 ? 'text-green-600' : calculatedTotal < 0 ? 'text-red-600' : 'text-gray-600'
            }`}>
              {calculatedTotal > 0 ? '+' : ''}{calculatedTotal}
            </span>
            <p className="text-gray-600 mt-2">pontos</p>
          </div>
        </Card>

        {/* Apply To */}
        <Card>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">👥 Aplicar Para</h2>
          <div className="space-y-3">
            <label className="flex items-center">
              <input
                type="radio"
                name="applyTo"
                value="pathfinder"
                checked={applyTo === 'pathfinder'}
                onChange={(e) => setApplyTo(e.target.value)}
                className="mr-3"
              />
              <span>Desbravador</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="applyTo"
                value="unit"
                checked={applyTo === 'unit'}
                onChange={(e) => setApplyTo(e.target.value)}
                className="mr-3"
              />
              <span>Unidade</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="applyTo"
                value="multiple"
                checked={applyTo === 'multiple'}
                onChange={(e) => setApplyTo(e.target.value)}
                className="mr-3"
              />
              <span>Vários Desbravadores</span>
            </label>
          </div>
        </Card>

        {/* Selection */}
        {applyTo && (
          <Card>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">🎯 Selecionar</h2>
            {applyTo === 'pathfinder' && (
              <div className="space-y-2">
                {members.map((member) => (
                  <label key={member.id} className="flex items-center">
                    <input
                      type="radio"
                      name="selectedMember"
                      value={member.id}
                      onChange={() => setSelectedMembers([member.id])}
                      className="mr-3"
                    />
                    <span>{member.name} - {member.unit}</span>
                  </label>
                ))}
              </div>
            )}
            {applyTo === 'unit' && (
              <select
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setSelectedMembers([e.target.value])}
              >
                <option value="">Selecione uma unidade</option>
                {units.map((unit) => (
                  <option key={unit.id} value={unit.id}>{unit.name}</option>
                ))}
              </select>
            )}
            {applyTo === 'multiple' && (
              <div className="space-y-2">
                {members.map((member) => (
                  <label key={member.id} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedMembers.includes(member.id)}
                      onChange={() => handleMemberSelect(member.id)}
                      className="mr-3"
                    />
                    <span>{member.name} - {member.unit}</span>
                  </label>
                ))}
              </div>
            )}
          </Card>
        )}

        {/* Observation */}
        <Card>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">📝 Observação (opcional)</h2>
          <textarea
            value={observation}
            onChange={(e) => setObservation(e.target.value)}
            placeholder="Adicione uma observação sobre os pontos..."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
          />
        </Card>

        {/* Submit */}
        <div className="flex justify-end">
          <Button
            type="submit"
            size="lg"
            loading={loading}
            disabled={selectedTypes.length === 0 || !applyTo}
          >
            Registrar Pontos
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddPoints;