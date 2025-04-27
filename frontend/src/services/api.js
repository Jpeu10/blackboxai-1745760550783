import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const getSoloData = (limit = 7) => {
  return api.get(`/dados/solo?limit=${limit}`);
};

export const getClimaData = (limit = 7) => {
  return api.get(`/dados/clima?limit=${limit}`);
};

export const getMissoes = (status) => {
  const url = status ? `/missoes?status=${status}` : '/missoes';
  return api.get(url);
};

export const postMissao = (missao) => {
  return api.post('/missoes', missao);
};

export const getPlantas = (since) => {
  const url = since ? `/plantas?since=${since}` : '/plantas';
  return api.get(url);
};

export const resolvePlanta = (plantId) => {
  return api.post('/plantas/resolve', { plantId });
};

export const processImage = (imageFile) => {
  const formData = new FormData();
  formData.append('image', imageFile);
  return api.post('/process-image', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export default api;
