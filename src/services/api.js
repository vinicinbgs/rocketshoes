import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:7500',
});

export default api;