import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
};

export const clubsAPI = {
  getClubs: () => api.get('/clubs'),
  getClub: (id) => api.get(`/clubs/${id}`),
  createClub: (club) => api.post('/clubs', club),
  updateClub: (id, club) => api.put(`/clubs/${id}`, club),
  deleteClub: (id) => api.delete(`/clubs/${id}`),
};

export const membersAPI = {
  getMembers: () => api.get('/members'),
  getMember: (id) => api.get(`/members/${id}`),
  createMember: (member) => api.post('/members', member),
  updateMember: (id, member) => api.put(`/members/${id}`, member),
  deleteMember: (id) => api.delete(`/members/${id}`),
};

export default api;