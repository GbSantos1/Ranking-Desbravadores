const http = require('http');

const PORT = 3000;

// Dados mock
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

// Função para enviar resposta JSON
function sendJSON(res, data, statusCode = 200) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  });
  res.end(JSON.stringify(data));
}

// Função para lidar com CORS
function handleCORS(req, res) {
  if (req.method === 'OPTIONS') {
    res.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    });
    res.end();
    return true;
  }
  return false;
}

// Parse URL
function parseURL(url) {
  const [path, query] = url.split('?');
  return { path, query };
}

// Parse body para POST
function parseBody(req) {
  return new Promise((resolve) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        resolve(JSON.parse(body));
      } catch {
        resolve({});
      }
    });
  });
}

// Servidor HTTP
const server = http.createServer(async (req, res) => {
  // Handle CORS
  if (handleCORS(req, res)) {
    return;
  }

  const { path } = parseURL(req.url);
  
  console.log(`${req.method} ${path}`);

  try {
    switch (path) {
      case '/api/health':
        sendJSON(res, { 
          status: 'OK', 
          message: 'Backend nativo funcionando!',
          timestamp: new Date().toISOString()
        });
        break;

      case '/api/members':
        sendJSON(res, { message: 'Members', data: mockData.members });
        break;

      case '/api/units':
        sendJSON(res, { message: 'Units', data: mockData.units });
        break;

      case '/api/clubs':
        sendJSON(res, { message: 'Clubs', data: mockData.clubs });
        break;

      case '/api/point-types':
        sendJSON(res, { message: 'Point Types', data: mockData.pointTypes });
        break;

      case '/api/ranking/members':
        sendJSON(res, { message: 'Member Ranking', data: [] });
        break;

      case '/api/ranking/units':
        sendJSON(res, { message: 'Unit Ranking', data: [] });
        break;

      case '/api/auth/login':
        if (req.method === 'POST') {
          const body = await parseBody(req);
          const { user_id, birth_year, password } = body;
          
          if (user_id === 'D21122024' && birth_year === '2006' && password === '211224') {
            sendJSON(res, {
              message: 'Login realizado com sucesso',
              token: 'mock_token_12345',
              user: {
                id: 'D21122024',
                username: 'D21122024',
                role: 'SUPER_ADMIN',
                unit_id: null,
                birth_year: '2006'
              }
            });
          } else {
            sendJSON(res, {
              error: 'Credenciais inválidas',
              message: 'ID, ano ou senha incorretos'
            }, 401);
          }
        } else {
          sendJSON(res, { error: 'Method not allowed' }, 405);
        }
        break;

      default:
        sendJSON(res, { error: 'Not found' }, 404);
        break;
    }
  } catch (error) {
    console.error('Error:', error);
    sendJSON(res, { error: 'Internal server error' }, 500);
  }
});

server.listen(PORT, () => {
  console.log('='.repeat(60));
  console.log('BACKEND NATIVO (SEM DEPENDÊNCIAS) RODANDO');
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
});
