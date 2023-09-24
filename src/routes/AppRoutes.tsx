import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import GuestOnlyRoute from './GuestOnlyRoute';
import { MainLoginPage } from '../pages/MainLoginPage';
import { MainPage } from '../pages/MainPage';
import SubjectsPage from '../pages/SubjectsPage';
import ModulesPage from '../pages/ModulesPage';
import HomeworkPage from '../pages/HomeworkPage';

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
      <Route
        path="/modules/:uniqueID"
        element={<ProtectedRoute element={<SubjectsPage />} redirectTo="/" />}
      />
      <Route
        path="/:subjectId/:uniqueID"
        element={<ProtectedRoute element={<ModulesPage />} redirectTo="/" />}
      />
      <Route
        path="/homework/:uniqueID"
        element={<ProtectedRoute element={<HomeworkPage />} redirectTo="/" />}
      />
      {/* <Route
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
