
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gpg-backend-cpwk3e1wu-rai-7203e9db.vercel.app/api',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
