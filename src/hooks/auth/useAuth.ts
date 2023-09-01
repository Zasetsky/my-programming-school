export const useAuth = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  return { isAuthenticated };
};
