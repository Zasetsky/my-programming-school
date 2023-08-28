import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import GuestOnlyRoute from './GuestOnlyRoute';
import { MainLoginPage } from '../pages/MainLoginPage';
import { MainPage } from '../pages/MainPage';

const AppRoutes = () => {
  // Извлекаем uniqueID из localStorage
  const uniqueID = localStorage.getItem('uniqueID') || '';

  return (
    <Routes>
      <Route
        path="/"
        element={
          <GuestOnlyRoute
            element={<MainLoginPage />}
            redirectTo={`/main/${uniqueID}`}
          />
        }
      />
      <Route
        path="/main/:uniqueID"
        element={<ProtectedRoute element={<MainPage />} redirectTo="/" />}
      />
    </Routes>
  );
};

export default AppRoutes;
