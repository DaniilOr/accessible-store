import axios from 'axios';

const api = axios.create({
  baseURL: `https://daniilor.pythonanywhere.com/`,
});

export default api;
