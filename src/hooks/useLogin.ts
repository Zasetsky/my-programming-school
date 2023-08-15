import { useState } from 'react';

export const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Ваш код для входа
  };

  return { email, setEmail, password, setPassword, handleLogin };
};