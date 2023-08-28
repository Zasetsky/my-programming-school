import React from 'react';
import Avatar from '../components/AvatarComponent';
import MenuButtonComponent from '../components/main/MenuButtonComponent';
import { CheckList, Homework } from '../assets/icons/index';
import PaymentIcon from '@mui/icons-material/Payment';
import '../assets/styles/components/main-page.scss';

export const MainPage = () => {
  const buttons = [
    { icon: <CheckList />, url: '/home' },
    { icon: <Homework />, url: '/profile' },
    { icon: <PaymentIcon />, url: '/settings' },
  ];

  return (
    <div className="main-page">
      <Avatar />
      <div className="main-page__buttons-container">
        <div className="main-page__buttons">
          {buttons.map((button, index) => (
            <div className="main-page__button-item" key={index}>
              <MenuButtonComponent icon={button.icon} url={button.url} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
