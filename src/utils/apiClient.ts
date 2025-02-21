import axios from 'axios';

const API_BASE_URL = 'https://jsearch.p.rapidapi.com';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY || '',
  },
});

export default apiClient;
