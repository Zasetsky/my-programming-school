import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../state/rootState';

export const MainPage = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  ); // Указание типа

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <div>{/* Ваш код */}</div>;
};
