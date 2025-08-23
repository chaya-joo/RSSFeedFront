import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://localhost:44338/api',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': 'true',
  },
});

export default axiosInstance;