import axios from 'axios';

const API_BASE_URL = 'https://women-security.vercel.app';

export const createZone = (zoneData) => {
  return axios.post(`${API_BASE_URL}/api/zone/create`, zoneData);
};

export const getZone = (latitude, longitude) => {
  return axios.post(`${API_BASE_URL}/api/zone/get`, { latitude, longitude });
};
