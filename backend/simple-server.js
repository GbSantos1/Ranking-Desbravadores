const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// CORS
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173', 'http://192.168.0.117:5173']
}));

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

// Endpoints
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Backend simplificado funcionando!',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/members', (req, res) => {
  res.json({ message: 'Members', data: mockData.members });
});

app.get('/api/units', (req, res) => {
  res.json({ message: 'Units', data: mockData.units });
});

app.get('/api/clubs', (req, res) => {
  res.json({ message: 'Clubs', data: mockData.clubs });
});

app.get('/api/point-types', (req, res) => {
  res.json({ message: 'Point Types', data: mockData.pointTypes });
});

app.get('/api/ranking/members', (req, res) => {
  res.json({ message: 'Member Ranking', data: [] });
});

app.get('/api/ranking/units', (req, res) => {
  res.json({ message: 'Unit Ranking', data: [] });
});

// Login endpoint
app.post('/api/auth/login', (req, res) => {
  const { user_id, birth_year, password } = req.body;
  
  // Validação simples
  if (user_id === 'D21122024' && birth_year === '2006' && password === '211224') {
    res.json({
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
    res.status(401).json({
      error: 'Credenciais inválidas',
      message: 'ID, ano ou senha incorretos'
    });
  }
});

app.listen(PORT, () => {
  console.log('='.repeat(50));
  console.log('BACKEND SIMPLIFICADO RODANDO');
  console.log('='.repeat(50));
  console.log(`Porta: ${PORT}`);
  console.log(`URL: http://localhost:${PORT}`);
  console.log(`Health: http://localhost:${PORT}/api/health`);
  console.log('='.repeat(50));
});
