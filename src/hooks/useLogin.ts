import { useState, useCallback } from 'react';
import { login } from '../api/auth'; // Убедитесь, что путь к файлу с функцией login правильный

export const useLogin = () => {
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState('');

  const handleOpen = (selectedRole: string) => {
    setRole(selectedRole);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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

  return { open, role, handleOpen, handleClose, resetRole, handleSubmit };
};
