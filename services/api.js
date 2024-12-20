import axios from 'axios';

const token = '7d5a6ebefdba328cb84f4ec8557a5cb130e3c8b9eb52102ec0df5d0a42b7192ee9ccc13ab3103593d9966f7026e326ddb285eb4316c01255e69607ad61b7e4126a9f9c01da814f2521733f5ed6510f5f760ebb2a04bfd3e10111195fca6982fc4387f38c8a2e7d7f67462acbd4dd0cd2cef685a8186be002c26b44077136b029'

const api = axios.create({
  baseURL: 'http://localhost:1337/api',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
});

export default api;
