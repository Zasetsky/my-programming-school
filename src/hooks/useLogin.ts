import { useState, useCallback } from 'react';
import { auth } from '../api/auth';

export const useLogin = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [role, setRole] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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

  const resetRole = useCallback(() => {
    setRole('');
    setOpen(false);
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent, login: string, password: string) => {
      e.preventDefault();
      try {
        const response = await auth(login, password, role);
        // Обработка успешного входа
        // ...
        resetRole();
      } catch (error) {
        // Обработка ошибки
        // ...
      }
    },
    [resetRole, role],
  );

  return {
    open,
    role,
    showPassword,
    password,
    login,
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
