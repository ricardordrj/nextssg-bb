import axios from 'axios';


const api = axios.create({
  baseURL: process.env.URL_STRAPI_API || 'http://localhost:1337/api',
  headers: {
    'Authorization': `Bearer ${process.env.BEARER_TOKEN}`,
    'Content-Type': 'application/json'
  }
});

export default api;
