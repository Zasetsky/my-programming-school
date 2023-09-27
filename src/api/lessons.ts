import axios from 'axios';

export const fetchAllUserLessons = async () => {
  const baseUrl = process.env.REACT_APP_API_BASE_URL || '';

  const response = await axios.get(`${baseUrl}/api/getLessons`);
  return response.data;
};
