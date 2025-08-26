import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL || 'https://localhost:44338/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;