const http = require('http');
const PORT = 3000;

console.log('Iniciando servidor minimalista...');

const server = http.createServer((req, res) => {
  // Configurar headers CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Content-Type', 'application/json');

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  console.log(`Requisição: ${req.method} ${req.url}`);

  // Rotas simples
  if (req.url === '/api/health' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({
      status: 'OK',
      message: 'Servidor minimalista funcionando!',
      timestamp: new Date().toISOString()
    }));
  } else if (req.url === '/api/members' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({
      message: 'Members',
      data: [
        { id: 'member1', name: 'Admin Sistema', user_id: 'D21122024', unit_id: 'unit1', points: 0 }
      ]
    }));
  } else if (req.url === '/api/units' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({
      message: 'Units',
      data: [
        { id: 'unit1', name: 'Tiago White', type: 'Masculina', points: 0 }
      ]
    }));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({
      error: 'Not found',
      message: `Rota ${req.url} não encontrada`
    }));
  }
});

// Tratar erros de porta
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`ERRO: Porta ${PORT} já está em uso!`);
    console.error('Por favor, feche outros processos usando esta porta.');
    process.exit(1);
  } else {
    console.error('ERRO no servidor:', err);
    process.exit(1);
  }
});

// Iniciar servidor
server.listen(PORT, '127.0.0.1', () => {
  console.log('='.repeat(50));
  console.log('SERVIDOR MINIMALISTA RODANDO');
  console.log('='.repeat(50));
  console.log(`Porta: ${PORT}`);
  console.log(`URL: http://localhost:${PORT}`);
  console.log(`Health: http://localhost:${PORT}/api/health`);
  console.log('='.repeat(50));
  console.log('Servidor iniciado com sucesso!');
});
