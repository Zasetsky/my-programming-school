import React from 'react';
import Avatar from '../components/AvatarComponent';
import MenuButtonComponent from '../components/main/MenuButtonComponent';
import { Homework } from '../assets/icons/index';
import PaymentIcon from '@mui/icons-material/Payment';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SettingsIcon from '@mui/icons-material/Settings';
// import CastForEducationIcon from '@mui/icons-material/CastForEducation';
// import NoteAddIcon from '@mui/icons-material/NoteAdd';
import '../assets/styles/components/main-page.scss';

export const MainPage = () => {
  const uniqueID = localStorage.getItem('uniqueID') || '';

  const buttons = [
    {
      icon: <LibraryBooksIcon />,
      url: `/modules/${uniqueID}`,
      name: 'Модули и оценки',
    },
    { icon: <Homework />, url: '/homework', name: 'Домашняя работа' },
    { icon: <PaymentIcon />, url: '/payment', name: 'Оплата' },
    // { icon: <CastForEducationIcon />, url: '/teacher', name: 'Найти учителя' },
    // {
    //   icon: <NoteAddIcon />,
    //   url: `/subjects/${uniqueID}`,
    //   name: 'Добавить предмет',
    // },
    { icon: <SettingsIcon />, url: '/settings', name: 'Настройки' },
  ];

  return (
    <div className="main-page">
      <Avatar />
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
