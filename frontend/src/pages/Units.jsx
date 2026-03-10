import Layout from '../layouts/Layout';

const Units = () => {
  return (
    <Layout>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Unidades do Clube</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">+ Nova Unidade</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Águias</h2>
          <p>Conselheiro: Carlos</p>
          <p>Integrantes: 8</p>
          <p>Pontuação: 1450 pts</p>
          <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded">Ver Unidade</button>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Tigres</h2>
          <p>Conselheiro: Ana</p>
          <p>Integrantes: 7</p>
          <p>Pontuação: 1320 pts</p>
          <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded">Ver Unidade</button>
        </div>
      </div>
    </Layout>
  );
};

export default Units;