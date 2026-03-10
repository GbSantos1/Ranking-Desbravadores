import Layout from '../layouts/Layout';

const Competitions = () => {
  return (
    <Layout>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Gincanas</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">+ Nova Gincana</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Gincana 2026</h2>
          <p>Início: 01/01/2026</p>
          <p>Fim: 31/12/2026</p>
          <p>Status: Ativa</p>
          <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded">Abrir</button>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Gincana Campori</h2>
          <p>Status: Encerrada</p>
          <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded">Abrir</button>
        </div>
      </div>
    </Layout>
  );
};

export default Competitions;