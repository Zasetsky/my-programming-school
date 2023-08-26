import React from 'react';
import { Button } from '@mui/material';
import { useLogin } from '../hooks/useLogin';
import LoginComponent from '../components/auth/LoginComponent';
import RegistrationComponent from '../components/auth/RegistrationComponent';
import AvatarCircle from '../components/AvatarCircle';
import { StudentIcon, TeacherIcon, GuestIcon } from '../assets/icons/index';
// import { useTheme as useAppTheme } from '../hooks/useTheme';

import '../assets/styles/components/main-page.scss';

export const MainLoginPage = () => {
  const loginHook = useLogin();
  // const { darkMode, setDarkMode } = useAppTheme();

  // const toggleTheme = () => {
  //   // Функция для переключения темы
  //   setDarkMode(!darkMode);
  // };

  return (
    <div className="main-page">
      <AvatarCircle />
      <div className="main-page__circle"></div>
      <h1 className="main-page__title">
        Добро пожаловать в школу программирования
      </h1>
      {/* <button
        className="main-page__role-selection__button"
        onClick={toggleTheme}
      >
        {darkMode
          ? 'Переключить на светлую тему'
          : 'Переключить на темную тему'}
      </button> */}
      {loginHook.role ? (
        loginHook.role === 'Гость' ? (
          <RegistrationComponent resetRole={loginHook.resetRole} />
        ) : (
          <LoginComponent {...loginHook} />
        )
      ) : (
        <div className="main-page__role-selection">
          <p>Выберите свою роль:</p>
          <div className="button-row">
            <div className="button-wrapper">
              <Button
                className="main-page__role-selection__button"
                variant="contained"
                onClick={() => loginHook.handleOpen('Ученик')}
              >
                <StudentIcon />
              </Button>
              Ученик
            </div>
            <div className="button-wrapper">
              <Button
                className="main-page__role-selection__button"
                variant="contained"
                onClick={() => loginHook.handleOpen('Учитель')}
              >
                <TeacherIcon />
              </Button>
              Учитель
            </div>
          </div>
          <div className="button-wrapper">
            <Button
              variant="contained"
              className="main-page__role-selection__button"
              onClick={() => loginHook.handleOpen('Гость')}
            >
              <GuestIcon />
            </Button>
            Регистрация
          </div>
        </div>
      )}
    </div>
  );
};
