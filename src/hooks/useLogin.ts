import { useState } from 'react';

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

  const resetRole = () => {
    setRole('');
    setOpen(false);
  };

  return { open, role, handleOpen, handleClose, resetRole };
};
