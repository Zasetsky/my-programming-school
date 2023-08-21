import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import { useLogin } from '../hooks/useLogin';
import '../assets/styles/components/login.scss';

interface LoginComponentProps {
  resetRole: () => void;
}

const LoginComponent = ({ resetRole }: LoginComponentProps) => {
  const { handleSubmit } = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(e, email, password);
  };

  return (
    <Container component="main" maxWidth="xs" className="login">
      <div className="login__header">
        <Typography component="h1" variant="h5">
          Вход
        </Typography>
        <form noValidate onSubmit={handleFormSubmit} className="login__form">
          <TextField
            className="login__input"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Адрес электронной почты"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className="login__input"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="login__button login__button--submit"
          >
            Войти
          </Button>
        </form>
        <Button
          onClick={resetRole}
          fullWidth
          variant="text"
          className="login__button login__button--back"
        >
          {' '}
          {/* Кнопка "назад" */}
          Вернуться назад
        </Button>
      </div>
    </Container>
  );
};

export default LoginComponent;
