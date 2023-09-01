import React from 'react';
import { Button } from '@mui/material';
import { useLogin } from '../hooks/auth/useLogin';
import LoginComponent from '../components/auth/LoginComponent';
import RegistrationComponent from '../components/auth/RegistrationComponent';
import Avatar from '../components/AvatarComponent';
import { StudentIcon, TeacherIcon, GuestIcon } from '../assets/icons/index';
import { useTheme as useAppTheme } from '../hooks/theme/useTheme';

import '../assets/styles/components/main-login-page.scss';

export const MainLoginPage = () => {
  const loginHook = useLogin();
  const { darkMode, setDarkMode } = useAppTheme();

  const toggleTheme = () => {
    // Функция для переключения темы
    setDarkMode(!darkMode);
  };

  return (
    <div className="main-login-page">
      <Avatar />
      <h1 className="main-login-page__title">
        Добро пожаловать в школу программирования
      </h1>
      <button
        className="main-login-page__role-selection__button"
        onClick={toggleTheme}
      >
        {darkMode
          ? 'Переключить на светлую тему'
          : 'Переключить на темную тему'}
      </button>
      {loginHook.role ? (
        loginHook.role === 'Гость' ? (
          <RegistrationComponent resetRole={loginHook.resetRole} />
        ) : (
          <LoginComponent {...loginHook} />
        )
      ) : (
        <div className="main-login-page__role-selection">
          <p>Выберите свою роль:</p>
          <div className="button-row">
            <div className="button-wrapper">
              <Button
                className="main-login-page__role-selection__button"
                variant="contained"
                onClick={() => loginHook.handleOpen('Ученик')}
              >
                <StudentIcon />
              </Button>
              <span>Ученик</span>
            </div>
            <div className="button-wrapper">
              <Button
                className="main-login-page__role-selection__button"
                variant="contained"
                onClick={() => loginHook.handleOpen('Учитель')}
              >
                <TeacherIcon />
              </Button>
              <span>Учитель</span>
            </div>
          </div>
          <div className="button-wrapper">
            <Button
              variant="contained"
              className="main-login-page__role-selection__button"
              onClick={() => loginHook.handleOpen('Гость')}
            >
              <GuestIcon />
            </Button>
            <span>Регистрация</span>
          </div>
        </div>
      )}
    </div>
  );
};
