import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // your backend URL
  withCredentials: true,
});

// Add interceptor for automatic token refresh
api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await api.post('/refresh-token');
        return api(originalRequest);
      } catch (err) {
        console.error('Token refresh failed');
      }
    }
    return Promise.reject(error);
  }
);

export default api;
