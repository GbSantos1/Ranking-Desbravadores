import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { phone, password });
      localStorage.setItem('token', res.data.token);
      window.location.href = '/';
    } catch (err) {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-4xl font-bold mb-2">BRAVUP</h1>
        <p className="text-lg mb-8">Sistema de Gincana para Desbravadores</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Telefone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 mb-4 border rounded"
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-4 border rounded"
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded mb-4">Entrar</button>
        </form>
        <a href="#" className="text-blue-500">Esqueceu a senha?</a>
      </div>
    </div>
  );
};

export default Login;