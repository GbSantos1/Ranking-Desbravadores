import Layout from '../layouts/Layout';

const Ranking = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Ranking Geral</h1>

      <div className="bg-white p-4 rounded shadow mb-8">
        <h2 className="text-xl font-semibold mb-2">Posição | Desbravador | Unidade | Pontos</h2>
        <ul>
          <li>1º João Águias 450</li>
          <li>2º Maria Tigres 420</li>
          <li>3º Pedro Leões 390</li>
          <li>4º Lucas Águias 350</li>
        </ul>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Ranking por Unidade</h2>
        <ul>
          <li>1º Águias 1450 pts</li>
          <li>2º Tigres 1320 pts</li>
          <li>3º Leões 1200 pts</li>
        </ul>
      </div>
    </Layout>
  );
};

export default Ranking;