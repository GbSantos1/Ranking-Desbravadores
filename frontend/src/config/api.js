const env = import.meta.env.MODE || 'development';

const API_CONFIG = {
  development: {
    API_BASE_URL: 'http://localhost:3001/api',
  },
  production: {
    API_BASE_URL: 'https://ranking-desbravadores-api.onrender.com/api',
  },
  test: {
    API_BASE_URL: 'http://localhost:3001/api',
  }
};

let config;
if (env === 'production') {
  config = API_CONFIG.production;
} else if (env === 'test') {
  config = API_CONFIG.test;
} else {
  config = API_CONFIG.local;
}

export const API_BASE_URL = config.API_BASE_URL;

// Detecta se é API de teste (JSONPlaceholder) - USAR API REAL
export const isMockApi = false; // Usar API real do backend

// Debug - mostrar URL sendo usada
if (env === 'development') {
  console.log('API URL:', API_BASE_URL);
  console.log('Ambiente:', env === 'production' ? 'Produção' : 'Desenvolvimento');
  console.log('Mock API:', isMockApi ? 'Sim' : 'Não');
} else {
  console.log('Mock API ativado em produção:', isMockApi ? 'Sim' : 'Não');
}
