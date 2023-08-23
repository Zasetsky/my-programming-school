import { useState } from 'react';
import { submitRegistration as submitRegistrationAPI } from '../api/registrationAPI';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

export const useRegistration = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [role, setRole] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState<
    string | null
  >(null);
  const navigate = useNavigate();

  interface ErrorResponse {
    message: string;
  }

  interface SuccessResponse {
    token: string;
  }

  const submitRegistration = async () => {
    setPasswordError(null);
    setConfirmPasswordError(null);
    setEmailError(null);

    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailPattern.test(email)) {
      setEmailError('Введите действительный адрес электронной почты');
      return;
    }

    if (password.length < 6) {
      setPasswordError('Пароль должен содержать не менее 6 символов');
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Пароли не совпадают');
      return;
    }

    if (!role) {
      setError('Выберите вашу роль');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response: AxiosResponse<SuccessResponse> =
        await submitRegistrationAPI({ email, password, role });
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const axiosError = err as AxiosError<ErrorResponse>;
        setError(
          axiosError.response?.data?.message ||
            'Произошла ошибка при регистрации',
        );
      } else {
        setError('Произошла неизвестная ошибка');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
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
  };
};
