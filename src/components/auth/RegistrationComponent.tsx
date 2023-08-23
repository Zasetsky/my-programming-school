import React from 'react';
import {
  Button,
  TextField,
  Container,
  Typography,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
  InputLabel,
  CircularProgress,
} from '@mui/material';
import { useRegistration } from '../../hooks/useRegistration';

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
    submitRegistration,
    isLoading,
    error,
    emailError,
    passwordError,
    confirmPasswordError,
  } = useRegistration();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    submitRegistration();
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Регистрация
        </Typography>
        {isLoading && <CircularProgress />}
        {error && <Typography color="error">{error}</Typography>}
        <form onSubmit={handleSubmit} noValidate>
          <FormControl
            fullWidth
            variant="outlined"
            margin="dense"
            required
            error={Boolean(emailError)}
          >
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Адрес электронной почты"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <FormHelperText>{emailError}</FormHelperText>}
          </FormControl>

          <FormControl
            fullWidth
            variant="outlined"
            margin="dense"
            required
            error={Boolean(passwordError)}
          >
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Пароль"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <FormHelperText>{passwordError}</FormHelperText>}
          </FormControl>

          <FormControl
            fullWidth
            variant="outlined"
            margin="dense"
            required
            error={Boolean(confirmPasswordError)}
          >
            <TextField
              variant="outlined"
              required
              fullWidth
              name="confirmPassword"
              label="Повторить пароль"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {confirmPasswordError && (
              <FormHelperText>{confirmPasswordError}</FormHelperText>
            )}
          </FormControl>

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
            {error && role === '' && <FormHelperText>{error}</FormHelperText>}
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
