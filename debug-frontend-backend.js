// Script para debugar comunicação frontend-backend
const http = require('http');
const https = require('https');

console.log('=== DEBUG FRONTEND-BACKEND ===');
console.log('Testando comunicação entre frontend e backend...\n');

const API_BASE_URL = 'http://localhost:3000/api';

// Função para testar endpoint
async function testEndpoint(endpoint, description) {
  return new Promise((resolve) => {
    const url = `${API_BASE_URL}${endpoint}`;
    console.log(`\n[${description}]`);
    console.log(`URL: ${url}`);
    
    const options = {
      headers: {
        'Origin': 'http://localhost:5173'
      }
    };
    
    const req = http.request(url, options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        console.log(`Status: ${res.statusCode}`);
        try {
          const jsonData = JSON.parse(data);
          console.log(`Data: ${JSON.stringify(jsonData, null, 2)}`);
          resolve({ success: true, data: jsonData });
        } catch (e) {
          console.log(`Data (raw): ${data}`);
          resolve({ success: true, data: data });
        }
      });
    });
    
    req.on('error', (error) => {
      console.log(`ERRO: ${error.message}`);
      resolve({ success: false, error: error.message });
    });
    
    req.end();
  });
}

// Testar todos os endpoints
async function testAllEndpoints() {
  const results = {};
  
  // Testar endpoints principais
  results.health = await testEndpoint('/health', 'Health Check');
  results.members = await testEndpoint('/members', 'Members');
  results.units = await testEndpoint('/units', 'Units');
  results.clubs = await testEndpoint('/clubs', 'Clubs');
  results.pointTypes = await testEndpoint('/point-types', 'Point Types');
  results.rankingMembers = await testEndpoint('/ranking/members', 'Ranking Members');
  results.rankingUnits = await testEndpoint('/ranking/units', 'Ranking Units');
  
  // Resumo
  console.log('\n=== RESUMO ===');
  Object.keys(results).forEach(key => {
    const result = results[key];
    console.log(`${key}: ${result.success ? 'OK' : 'ERRO'}`);
  });
  
  // Verificar se backend está respondendo
  const successCount = Object.values(results).filter(r => r.success).length;
  const totalCount = Object.keys(results).length;
  
  console.log(`\nTotal: ${successCount}/${totalCount} endpoints funcionando`);
  
  if (successCount === totalCount) {
    console.log('Backend está 100% funcional!');
  } else {
    console.log('Backend tem problemas. Verifique os logs acima.');
  }
}

// Executar testes
testAllEndpoints().catch(console.error);
