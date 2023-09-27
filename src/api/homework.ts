import axios from 'axios';

export const fetchAllHomeworks = async () => {
  const baseUrl = process.env.REACT_APP_API_BASE_URL || '';

  const response = await axios.get(`${baseUrl}/api/getAllHomeworks`);
  return response.data;
};
