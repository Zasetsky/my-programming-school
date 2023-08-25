import axios from 'axios';

export const submitRegistration = (formData: {
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
}) => {
  const baseUrl = process.env.REACT_APP_API_BASE_URL || '';
  return axios.post(`${baseUrl}/api/register`, formData);
};
