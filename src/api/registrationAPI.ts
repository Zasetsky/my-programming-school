import axios from 'axios';

export const submitRegistration = async (formData: {
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
}) => {
  const baseUrl = process.env.REACT_APP_API_BASE_URL || '';
  const response = await axios.post(`${baseUrl}/api/register`, formData);
  return response.data;
};
