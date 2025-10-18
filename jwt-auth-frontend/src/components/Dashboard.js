import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/protected')
      .then(res => setMessage(res.data.message))
      .catch(() => navigate('/login'));
  }, [navigate]);

  const handleLogout = async () => {
    await api.post('/logout');
    navigate('/login');
  };

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <p>{message || 'Loading...'}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
