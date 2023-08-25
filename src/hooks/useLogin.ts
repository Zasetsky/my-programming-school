import { useState, useCallback } from 'react';
import { login } from '../api/auth';

export const useLogin = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [role, setRole] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
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
    async (e: React.FormEvent, email: string, password: string) => {
      e.preventDefault();
      try {
        const response = await login(email, password);
        // Обработка успешного входа
        // ...
        resetRole(); // например, если вход успешен
      } catch (error) {
        // Обработка ошибки
        // ...
      }
    },
    [resetRole],
  );

  return {
    open,
    role,
    showPassword,
    password,
    email,
    setShowPassword,
    handleOpen,
    handleClose,
    resetRole,
    handleSubmit,
    setEmail,
    setPassword,
    handleClickShowPassword,
  };
};
