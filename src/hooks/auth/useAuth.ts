import jwtDecode from 'jwt-decode';

interface DecodedToken {
  exp: number;
  [key: string]: unknown; // для остальных полей, если они есть
}

// Функция для проверки валидности токена
const isTokenValid = (token: string | null): boolean => {
  if (!token) {
    return false;
  }

  try {
    const decoded: DecodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    return decoded.exp > currentTime;
  } catch (error) {
    return false;
  }
};

export const useAuth = () => {
  const token = localStorage.getItem('token');

  const isAuthenticated = isTokenValid(token);

  if (!isAuthenticated) {
    localStorage.removeItem('token');
  }

  return { isAuthenticated };
};
