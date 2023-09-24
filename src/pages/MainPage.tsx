import React from 'react';
import Avatar from '../components/AvatarComponent';
import MenuButtonComponent from '../components/main/MenuButtonComponent';
import { Homework } from '../assets/icons/index';
import PaymentIcon from '@mui/icons-material/Payment';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import CastForEducationIcon from '@mui/icons-material/CastForEducation';
// import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { useTheme as useAppTheme } from '../hooks/theme/useTheme';

import '../assets/styles/components/main-page.scss';

export const MainPage = () => {
  const uniqueID = localStorage.getItem('uniqueID') || '';

  const { darkMode, setDarkMode } = useAppTheme();

  const toggleTheme = () => {
    // Функция для переключения темы
    setDarkMode(!darkMode);
  };

  const buttons = [
    {
      icon: <LibraryBooksIcon />,
      url: `/modules/${uniqueID}`,
      name: 'Модули и оценки',
    },
    {
      icon: <Homework />,
      url: `/homework/${uniqueID}`,
      name: 'Домашняя работа',
    },
    { icon: <PaymentIcon />, url: '/payment', name: 'Оплата' },
    { icon: <SettingsIcon />, url: '/settings', name: 'Настройки' },
    { icon: <ExitToAppIcon />, url: '', name: 'Выход' },
    // {
    //   icon: <NoteAddIcon />,
    //   url: `/subjects/${uniqueID}`,
    //   name: 'Добавить предмет',
    // },
  ];

  return (
    <div className="main-page">
      <Avatar />
      <button
        className="main-login-page__role-selection__button"
        onClick={toggleTheme}
      >
        {darkMode
          ? 'Переключить на светлую тему'
          : 'Переключить на темную тему'}
      </button>
      <div className="main-page__buttons-container">
        <div className="main-page__buttons">
          {buttons.map((button, index) => (
            <div className="main-page__button-item" key={index}>
              <MenuButtonComponent
                icon={button.icon}
                url={button.url}
                name={button.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
