import React from 'react';
import Avatar from '../components/AvatarComponent';
import MenuButtonComponent from '../components/main/MenuButtonComponent';
import { CheckList, Homework } from '../assets/icons/index';
import PaymentIcon from '@mui/icons-material/Payment';
import SettingsIcon from '@mui/icons-material/Settings';
import '../assets/styles/components/main-page.scss';

export const MainPage = () => {
  const uniqueID = localStorage.getItem('uniqueID') || '';

  const buttons = [
    {
      icon: <CheckList />,
      url: `/subjects/${uniqueID}`,
      name: 'Модули и оценки',
    },
    { icon: <Homework />, url: '/homework', name: 'Домашняя работа' },
    { icon: <PaymentIcon />, url: '/payment', name: 'Оплата' },
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
