import { useState } from 'react';
import Layout from '../layouts/Layout';

const AddPoints = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [applyTo, setApplyTo] = useState('');
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [observation, setObservation] = useState('');

  const pointTypes = [
    { name: 'Classe bíblica', points: 90 },
    { name: 'Fazendo caderno de classe', points: 40 },
  ];

  const handleTypeSelect = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter(t => t !== type));
      setTotalPoints(totalPoints - type.points);
    } else {
      setSelectedTypes([...selectedTypes, type]);
      setTotalPoints(totalPoints + type.points);
    }
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Adicionar Pontos</h1>

      <div className="bg-white p-4 rounded shadow mb-4">
        <h2 className="text-xl font-semibold mb-2">Tipo de Pontuação</h2>
        <select className="w-full p-2 border rounded mb-2">
          <option>Classe bíblica</option>
          <option>Fazendo caderno/cartão de classe</option>
        </select>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">+ Adicionar tipo de pontuação</button>
      </div>

      <div className="bg-white p-4 rounded shadow mb-4">
        <h2 className="text-xl font-semibold mb-2">Pontos a Receber</h2>
        <p className="text-2xl font-bold">+{totalPoints}</p>
      </div>

      <div className="bg-white p-4 rounded shadow mb-4">
        <h2 className="text-xl font-semibold mb-2">Aplicar Para</h2>
        <label className="block">
          <input type="radio" name="applyTo" value="member" onChange={(e) => setApplyTo(e.target.value)} /> Desbravador
        </label>
        <label className="block">
          <input type="radio" name="applyTo" value="unit" onChange={(e) => setApplyTo(e.target.value)} /> Unidade
        </label>
        <label className="block">
          <input type="radio" name="applyTo" value="multiple" onChange={(e) => setApplyTo(e.target.value)} /> Vários Desbravadores
        </label>
      </div>

      <div className="bg-white p-4 rounded shadow mb-4">
        <h2 className="text-xl font-semibold mb-2">Selecionar</h2>
        <select multiple className="w-full p-2 border rounded">
          <option>João</option>
          <option>Maria</option>
          <option>Pedro</option>
        </select>
      </div>

      <div className="bg-white p-4 rounded shadow mb-4">
        <h2 className="text-xl font-semibold mb-2">Observação (opcional)</h2>
        <textarea
          value={observation}
          onChange={(e) => setObservation(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <button className="w-full bg-green-500 text-white p-3 rounded">Registrar Pontos</button>
    </Layout>
  );
};

export default AddPoints;