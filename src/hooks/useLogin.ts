import { useState } from 'react';
import { auth } from '../api/auth';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [role, setRole] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [invalidFields, setInvalidFields] = useState<{
    login?: boolean;
    password?: boolean;
  }>({});
  const navigate = useNavigate();

  const handleOpen = (selectedRole: string) => {
    setRole(selectedRole);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const resetRole = () => {
    setRole('');
    setOpen(false);
  };

  const handleSubmit = async (
    e: React.FormEvent,
    login: string,
    password: string,
  ) => {
    e.preventDefault();

    // Базовая валидация на клиенте
    if (!login || !password) {
      setErrorMessage('Все поля обязательны для заполнения');
      setInvalidFields({ login: !login, password: !password });
      return;
    }

    // Новая валидация для пароля
    if (password.length < 6) {
      setErrorMessage('Пароль должен содержать не менее 6 символов');
      setInvalidFields({ password: true });
      return;
    }

    try {
      const response = await auth(login, password, role);

      // Сохраняем токен в localStorage
      localStorage.setItem('token', response.token);

      // Сбрасываем сообщения об ошибках и неверные поля, если они есть
      setErrorMessage(null);
      setInvalidFields({});

      // Перенаправляем пользователя на его уникальную страницу
      navigate(`/main/${response.uniqueID}`);
    } catch (error) {
      if (error && typeof error === 'object' && 'response' in error) {
        const errObj = error as {
          response: {
            data: {
              error: string;
              fields: { login?: boolean; password?: boolean };
            };
          };
        };
        setErrorMessage(errObj.response.data.error);
        setInvalidFields(errObj.response.data.fields);
      }
    }
  };

  return {
    open,
    role,
    showPassword,
    password,
    login,
    errorMessage,
    invalidFields,
    setShowPassword,
    handleOpen,
    handleClose,
    resetRole,
    handleSubmit,
    setLogin,
    setPassword,
    handleClickShowPassword,
  };
};
