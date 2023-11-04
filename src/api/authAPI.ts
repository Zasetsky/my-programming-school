import axios from 'axios';

export const auth = async (login: string, password: string, role: string) => {
  const baseUrl = process.env.REACT_APP_API_BASE_URL || '';

  const response = await axios.post(`${baseUrl}/login`, {
    login,
    password,
    role,
  });

  return response.data;
};
