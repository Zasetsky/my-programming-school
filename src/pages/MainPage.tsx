import React from 'react';
import { Button } from '@mui/material';
import { useLogin } from '../hooks/useLogin';
import LoginPage from '../components/LoginPage';
import RegistrationPage from '../components/RegistrationPage'; // Предположим, что у вас есть такой компонент

export const MainPage = () => {
  const { role, handleOpen, resetRole } = useLogin();

  return (
    <div>
      <h1>Добро пожаловать в школу программирования</h1>
      {role ? (
        role === 'гость' ? (
          <RegistrationPage resetRole={resetRole} />
        ) : (
          <LoginPage resetRole={resetRole} />
        )
      ) : (
        <div>
          <p>Выберите свою роль:</p>
          <Button onClick={() => handleOpen('учитель')}>Учитель</Button>
          <Button onClick={() => handleOpen('ученик')}>Ученик</Button>
          <Button onClick={() => handleOpen('гость')}>Гость</Button>
        </div>
      )}
    </div>
  );
};
