import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // Импорт хука

export const MainPage = () => {
  const { isAuthenticated, token } = useAuth();

  if (!isAuthenticated || !token) {
    return <Navigate to="/" />;
  }

  return <div>{/* Ваш код */}</div>;
};
