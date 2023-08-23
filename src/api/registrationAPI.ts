import axios from 'axios';

export const submitRegistration = (formData: {
  email: string;
  password: string;
  role: string;
}) => {
  return axios.post('/api/register', formData);
};
