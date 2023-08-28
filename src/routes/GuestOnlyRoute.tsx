import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface GuestOnlyRouteProps {
  element: React.ReactElement;
  redirectTo: string;
}

const GuestOnlyRoute: React.FC<GuestOnlyRouteProps> = ({
  element,
  redirectTo,
}) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return element;
  } else {
    return <Navigate to={redirectTo} state={{ from: location }} />;
  }
};

export default GuestOnlyRoute;
