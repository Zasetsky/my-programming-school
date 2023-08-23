import React from 'react';
import {
  Button,
  TextField,
  Container,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { useRegistration } from '../hooks/useRegistration';
import { submitRegistration } from '../api/registrationAPI';

interface RegistrationComponentProps {
  resetRole: () => void;
}

const RegistrationComponent = ({ resetRole }: RegistrationComponentProps) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    role,
    setRole,
  } = useRegistration();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    submitRegistration({ email, password, role });
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Регистрация
        </Typography>
        <form onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="dense"
            required
            fullWidth
            id="email"
            label="Адрес электронной почты"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="dense"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="dense"
            required
            fullWidth
            name="confirmPassword"
            label="Повторить пароль"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <FormControl fullWidth variant="outlined" margin="dense" required>
            <InputLabel id="role-label">Ваша роль</InputLabel>
            <Select
              labelId="role-label"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value as string)}
              label="Ваша роль"
            >
              <MenuItem value="Учитель">Учитель</MenuItem>
              <MenuItem value="Ученик">Ученик</MenuItem>
            </Select>
          </FormControl>
          <Button
            style={{ marginTop: '8px' }}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Зарегистрироваться
          </Button>
        </form>
        <Button onClick={resetRole} fullWidth variant="text">
          Вернуться назад
        </Button>
      </div>
    </Container>
  );
};

export default RegistrationComponent;
