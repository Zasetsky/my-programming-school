import axios from 'axios';

export const auth = async (login: string, password: string, role: string) => {
  try {
    const response = await axios.post('/api/login', {
      login,
      password,
      role,
    });

    return response.data;
  } catch (error) {
    throw new Error('Ошибка авторизации');
  }
};
