// api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://zetakreeweb-production.up.railway.app/v1', // Your base URL
  // You can add other default settings here, e.g., headers
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
