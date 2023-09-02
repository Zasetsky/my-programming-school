import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import GuestOnlyRoute from './GuestOnlyRoute';
import { MainLoginPage } from '../pages/MainLoginPage';
import { MainPage } from '../pages/MainPage';
import SubjectsPage from '../pages/SubjectsPage';

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
        path="/main/*"
        element={<ProtectedRoute element={<MainPage />} redirectTo="/" />}
      />
      <Route
        path={`/modules/${uniqueID}`}
        element={<ProtectedRoute element={<SubjectsPage />} redirectTo="/" />}
      />
      {/* <Route
        path="/main/homework"
        element={<ProtectedRoute element={<HomeworkPage />} redirectTo="/" />}
      />
      <Route
        path="/main/payment"
        element={<ProtectedRoute element={<PaymentPage />} redirectTo="/" />}
      />
      <Route
        path="/main/settings"
        element={<ProtectedRoute element={<SettingsPage />} redirectTo="/" />}
      /> */}
    </Routes>
  );
};

export default AppRoutes;
