const ProjectorMode = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold mb-8">BRAVUP</h1>
      <h2 className="text-4xl mb-8">Ranking da Gincana</h2>

      <div className="text-3xl mb-8">
        <p>🥇 ÁGUIAS 1450 pts</p>
        <p>🥈 TIGRES 1320 pts</p>
        <p>🥉 LEÕES 1200 pts</p>
        <p>4º FALCÕES 1100 pts</p>
      </div>

      <div className="text-2xl mb-4">
        <p>⭐ Desbravador Destaque</p>
        <p>João - 320 pts</p>
      </div>

      <div className="text-2xl">
        <p>🏕️ Unidade Destaque</p>
        <p>Águias</p>
      </div>
    </div>
  );
};

export default ProjectorMode;