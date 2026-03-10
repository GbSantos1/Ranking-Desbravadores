import Layout from '../layouts/Layout';

const PointTypes = () => {
  return (
    <Layout>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Configuração de Pontuações</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">+ Adicionar Pontuação</button>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Pontuações Positivas</h2>
        <ul className="mb-4">
          <li className="flex justify-between">
            Classe bíblica +90
            <div>
              <button className="mr-2 bg-yellow-500 text-white px-2 py-1 rounded">Editar</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">Remover</button>
            </div>
          </li>
          <li className="flex justify-between">
            Fazendo caderno de classe +40
            <div>
              <button className="mr-2 bg-yellow-500 text-white px-2 py-1 rounded">Editar</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">Remover</button>
            </div>
          </li>
          <li className="flex justify-between">
            Unidade completa no horário +70
            <div>
              <button className="mr-2 bg-yellow-500 text-white px-2 py-1 rounded">Editar</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">Remover</button>
            </div>
          </li>
          <li className="flex justify-between">
            Trouxe aspirante 3 domingos +60
            <div>
              <button className="mr-2 bg-yellow-500 text-white px-2 py-1 rounded">Editar</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">Remover</button>
            </div>
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">Pontuações Negativas</h2>
        <ul>
          <li className="flex justify-between">
            Esqueceu Bíblia -50
            <div>
              <button className="mr-2 bg-yellow-500 text-white px-2 py-1 rounded">Editar</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">Remover</button>
            </div>
          </li>
          <li className="flex justify-between">
            Esqueceu livro classe bíblica -70
            <div>
              <button className="mr-2 bg-yellow-500 text-white px-2 py-1 rounded">Editar</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">Remover</button>
            </div>
          </li>
          <li className="flex justify-between">
            Unidade faltando membros -40
            <div>
              <button className="mr-2 bg-yellow-500 text-white px-2 py-1 rounded">Editar</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">Remover</button>
            </div>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default PointTypes;