import { Button, TextField, Container, Typography } from '@mui/material';

interface LoginPageProps {
  resetRole: () => void; // Объявление функции resetRole в пропсах
}

const LoginPage = ({ resetRole }: LoginPageProps) => { // Деструктуризация пропсов
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь ваша логика обработки входа, если вход успешный, можно вызвать resetRole
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Вход
        </Typography>
        <form noValidate onSubmit={handleSubmit}> {/* Обработка события onSubmit */}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Адрес электронной почты"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit" // Тип кнопки - submit, чтобы она отправляла форму
            fullWidth
            variant="contained"
            color="primary"
          >
            Войти
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default LoginPage;
