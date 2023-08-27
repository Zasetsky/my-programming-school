import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { MainLoginPage } from '../pages/MainLoginPage';
import { MainPage } from '../pages/MainPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLoginPage />} />
      <Route
        path="/main/:uniqueID"
        element={<ProtectedRoute element={<MainPage />} redirectTo="/" />}
      />
    </Routes>
  );
};

export default AppRoutes;
