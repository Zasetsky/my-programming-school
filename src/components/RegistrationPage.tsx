import { Button, TextField, Container, Typography } from '@mui/material';
import React, { useState } from 'react';

interface RegistrationPageProps {
  resetRole: () => void;
}

const RegistrationPage = ({ resetRole }: RegistrationPageProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [subject, setSubject] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Здесь вы можете отправить данные на сервер или обработать иначе
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
            margin="normal"
            required
            fullWidth
            id="name"
            label="Имя"
            name="name"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
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
            margin="normal"
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
            margin="normal"
            required
            fullWidth
            id="birthDate"
            label="Дата рождения"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="subject"
            label="Предмет для обучения"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
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

export default RegistrationPage;
