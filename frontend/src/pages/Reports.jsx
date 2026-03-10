import Layout from '../layouts/Layout';

const Reports = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Relatórios</h1>

      <div className="bg-white p-4 rounded shadow mb-4">
        <h2 className="text-xl font-semibold mb-2">Exportar</h2>
        <button className="mr-2 bg-blue-500 text-white px-4 py-2 rounded">Exportar Ranking</button>
        <button className="mr-2 bg-blue-500 text-white px-4 py-2 rounded">Exportar Histórico de Pontos</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Exportar Pontos por Unidade</button>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Formato</h2>
        <label className="block">
          <input type="radio" name="format" value="excel" /> Excel
        </label>
        <label className="block">
          <input type="radio" name="format" value="pdf" /> PDF
        </label>
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">Gerar Relatório</button>
      </div>
    </Layout>
  );
};

export default Reports;