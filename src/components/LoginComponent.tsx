import { Button, TextField, Container, Typography } from "@mui/material";

interface LoginComponentProps {
  resetRole: () => void;
}

const LoginComponent = ({ resetRole }: LoginComponentProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь ваша логика обработки входа, если вход успешный, можно вызвать resetRole
  };

  return (
    <Container component="main" maxWidth="xs" className="login-component">
      <div>
        <Typography component="h1" variant="h5">
          Вход
        </Typography>
        <form noValidate onSubmit={handleSubmit}>
          {" "}
          {/* Обработка события onSubmit */}
          <TextField
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
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Войти
          </Button>
        </form>
        <Button onClick={resetRole} fullWidth variant="text">
          {" "}
          {/* Кнопка "назад" */}
          Вернуться назад
        </Button>
      </div>
    </Container>
  );
};

export default LoginComponent;
