import axios from 'axios';

const token = '41fc905fe3683122b90dc4d45f6e36ef386126bc64e8137afbba392220140eba4059541d6ba0f66281dda2e140d9acca38e9d526a140cf26929497c9050b96ecc2929afa799a20f06364a19a4e224a50b596bce1f6ddb7074d6a26fcbc9586da3f612e1cf0660277f0ca671ecf4cbb3c47f82e5a9163e61021ac23299eb86bc0'

const api = axios.create({
  baseURL: 'https://strapi-cms-4j37.onrender.com/api',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
});

export default api;
