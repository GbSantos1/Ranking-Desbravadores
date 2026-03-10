import Layout from '../layouts/Layout';

const Settings = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Configurações do Clube</h1>

      <div className="bg-white p-4 rounded shadow">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Nome do Clube</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Cidade</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Estado</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Logo do Clube</label>
          <input type="file" className="w-full p-2 border rounded" />
        </div>

        <button className="bg-blue-500 text-white px-4 py-2 rounded">Salvar</button>
      </div>
    </Layout>
  );
};

export default Settings;