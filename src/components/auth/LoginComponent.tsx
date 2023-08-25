import React from 'react';
import {
  Button,
  TextField,
  Container,
  Typography,
  InputAdornment,
  IconButton,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useLogin } from '../../hooks/useLogin';

interface LoginComponentProps {
  resetRole: () => void;
}

const LoginComponent = ({ resetRole }: LoginComponentProps) => {
  const {
    login,
    password,
    showPassword,
    setLogin,
    setPassword,
    handleClickShowPassword,
    handleSubmit,
  } = useLogin();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(e, login, password);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Вход
        </Typography>
        <form noValidate onSubmit={handleFormSubmit}>
          <TextField
            margin="normal"
            required
            variant="standard"
            fullWidth
            id="login"
            label="Адрес электронной почты\телефон"
            name="login"
            autoComplete="email"
            autoFocus
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PersonIcon
                    sx={{ color: 'var(--primary-main)', marginRight: 1 }}
                  />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            margin="normal"
            variant="standard"
            required
            fullWidth
            name="password"
            label="Пароль"
            type={showPassword ? 'text' : 'password'}
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    sx={{ color: 'var(--primary-main)' }}
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Войти
          </Button>
        </form>
        <Button onClick={resetRole} fullWidth variant="text">
          {' '}
          {/* Кнопка "назад" */}
          Вернуться назад
        </Button>
      </div>
    </Container>
  );
};

export default LoginComponent;
