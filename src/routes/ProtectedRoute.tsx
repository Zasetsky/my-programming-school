import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/auth/useAuth';

interface ProtectedRouteProps {
  element: React.ReactElement;
  redirectTo: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  element,
  redirectTo,
}) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (isAuthenticated) {
    return element;
  } else {
    return <Navigate to={redirectTo} state={{ from: location }} />;
  }
};

export default ProtectedRoute;
