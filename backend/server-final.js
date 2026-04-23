const http = require('http');
const PORT = 3001; // Mudando porta para evitar conflitos

console.log('Iniciando servidor definitivo na porta 3001...');

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

  // Dados mock completos
  const mockData = {
    members: [
      { 
        id: 'member1', 
        name: 'Admin Sistema', 
        user_id: 'D21122024', 
        unit_id: 'unit1', 
        points: 0,
        unit_name: 'Tiago White',
        role: 'SUPER_ADMIN',
        birth_date: '2006-12-21',
        gender: 'Masculino'
      },
      { 
        id: 'member2', 
        name: 'Arthur', 
        user_id: 'D270713', 
        unit_id: 'unit1', 
        points: 0,
        unit_name: 'Tiago White',
        role: 'Pathfinder',
        birth_date: '2013-07-27',
        gender: 'Masculino'
      }
    ],
    units: [
      { id: 'unit1', name: 'Tiago White', type: 'Masculina', points: 0 },
      { id: 'unit2', name: 'Guilherme Miller', type: 'Masculina', points: 0 },
      { id: 'unit3', name: 'Ellen White', type: 'Feminina', points: 0 }
    ],
    clubs: [
      { id: 'club1', name: 'Clube Tiago White', status: 'approved', unit_id: 'unit1' },
      { id: 'club2', name: 'Clube Guilherme Miller', status: 'approved', unit_id: 'unit2' },
      { id: 'club3', name: 'Clube Ellen White', status: 'approved', unit_id: 'unit3' }
    ],
    pointTypes: [
      { id: 'type1', name: 'Participação', points: 5, type: 'positive', description: 'Participação em atividades' },
      { id: 'type2', name: 'Atraso', points: -2, type: 'negative', description: 'Atraso em reuniões' },
      { id: 'type3', name: 'Uniforme', points: 3, type: 'positive', description: 'Uniforme completo' }
    ]
  };

  // Rotas completas
  if (req.url === '/api/health' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({
      status: 'OK',
      message: 'Servidor definitivo funcionando!',
      timestamp: new Date().toISOString(),
      port: PORT
    }));
  } else if (req.url === '/api/members' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({
      message: 'Members',
      data: mockData.members
    }));
  } else if (req.url === '/api/units' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({
      message: 'Units',
      data: mockData.units
    }));
  } else if (req.url === '/api/clubs' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({
      message: 'Clubs',
      data: mockData.clubs
    }));
  } else if (req.url === '/api/point-types' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({
      message: 'Point Types',
      data: mockData.pointTypes
    }));
  } else if (req.url === '/api/ranking/members' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({
      message: 'Member Ranking',
      data: []
    }));
  } else if (req.url === '/api/ranking/units' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({
      message: 'Unit Ranking',
      data: []
    }));
  } else if (req.url === '/api/auth/login' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        const { user_id, birth_year, password } = JSON.parse(body);
        if (user_id === 'D21122024' && birth_year === '2006' && password === '211224') {
          res.writeHead(200);
          res.end(JSON.stringify({
            message: 'Login realizado com sucesso',
            token: 'mock_token_12345',
            user: {
              id: 'D21122024',
              username: 'D21122024',
              role: 'SUPER_ADMIN',
              unit_id: null,
              birth_year: '2006'
            }
          }));
        } else {
          res.writeHead(401);
          res.end(JSON.stringify({
            error: 'Credenciais inválidas',
            message: 'ID, ano ou senha incorretos'
          }));
        }
      } catch (error) {
        res.writeHead(400);
        res.end(JSON.stringify({
          error: 'Bad Request',
          message: 'JSON inválido'
        }));
      }
    });
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
    console.error('Tentando porta alternativa...');
    // Tentar porta 3002
    server.listen(3002, '127.0.0.1', () => {
      console.log('='.repeat(50));
      console.log('SERVIDOR DEFINITIVO RODANDO NA PORTA 3002');
      console.log('='.repeat(50));
      console.log(`Porta: 3002`);
      console.log(`URL: http://localhost:3002`);
      console.log(`Health: http://localhost:3002/api/health`);
      console.log('='.repeat(50));
    });
  } else {
    console.error('ERRO no servidor:', err);
    process.exit(1);
  }
});

// Iniciar servidor
server.listen(PORT, '127.0.0.1', () => {
  console.log('='.repeat(60));
  console.log('SERVIDOR DEFINITIVO RODANDO');
  console.log('='.repeat(60));
  console.log(`Porta: ${PORT}`);
  console.log(`URL: http://localhost:${PORT}`);
  console.log(`Health: http://localhost:${PORT}/api/health`);
  console.log('='.repeat(60));
  console.log('Endpoints disponíveis:');
  console.log('  GET /api/health');
  console.log('  GET /api/members');
  console.log('  GET /api/units');
  console.log('  GET /api/clubs');
  console.log('  GET /api/point-types');
  console.log('  GET /api/ranking/members');
  console.log('  GET /api/ranking/units');
  console.log('  POST /api/auth/login');
  console.log('='.repeat(60));
  console.log('Servidor iniciado com sucesso!');
  console.log('='.repeat(60));
});
