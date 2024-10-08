import axios from 'axios';

export const fetchInitialData = async () => {
  const response = await axios.get('http://localhost:4000/api/patients');
  return response.data;
};
