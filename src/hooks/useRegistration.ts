import { useState } from 'react';

export const useRegistration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [subject, setSubject] = useState('');
  const [name, setName] = useState('');

  return {
    email, setEmail,
    password, setPassword,
    birthDate, setBirthDate,
    subject, setSubject,
    name, setName
  };
};
