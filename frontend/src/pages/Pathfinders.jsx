import Layout from '../layouts/Layout';

const Pathfinders = () => {
  return (
    <Layout>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Desbravadores</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">+ Novo Desbravador</button>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Nome</th>
              <th className="text-left">Unidade</th>
              <th className="text-left">Cargo</th>
              <th className="text-left">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>João</td>
              <td>Águias</td>
              <td>Desbravador</td>
              <td>
                <button className="mr-2 bg-yellow-500 text-white px-2 py-1 rounded">Editar</button>
                <button className="bg-green-500 text-white px-2 py-1 rounded">Ver</button>
              </td>
            </tr>
            <tr>
              <td>Pedro</td>
              <td>Leões</td>
              <td>Desbravador</td>
              <td>
                <button className="mr-2 bg-yellow-500 text-white px-2 py-1 rounded">Editar</button>
                <button className="bg-green-500 text-white px-2 py-1 rounded">Ver</button>
              </td>
            </tr>
            <tr>
              <td>Lucas</td>
              <td>Águias</td>
              <td>Desbravador</td>
              <td>
                <button className="mr-2 bg-yellow-500 text-white px-2 py-1 rounded">Editar</button>
                <button className="bg-green-500 text-white px-2 py-1 rounded">Ver</button>
              </td>
            </tr>
            <tr>
              <td>Carlos</td>
              <td>Águias</td>
              <td>Conselheiro</td>
              <td>
                <button className="mr-2 bg-yellow-500 text-white px-2 py-1 rounded">Editar</button>
                <button className="bg-green-500 text-white px-2 py-1 rounded">Ver</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Pathfinders;