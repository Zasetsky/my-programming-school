import React, { useState } from 'react';
import { Dialog, TextField, Button } from '@mui/material';

interface AddSubjectDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  addSubject: (name: string) => void;
}

const AddSubjectDialog: React.FC<AddSubjectDialogProps> = ({
  open,
  setOpen,
  addSubject,
}) => {
  const [subjectName, setSubjectName] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    addSubject(subjectName);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <h2>Добавить предмет</h2>
      <TextField
        label="Название предмета"
        value={subjectName}
        onChange={(e) => setSubjectName(e.target.value)}
      />
      <Button onClick={handleSubmit}>Добавить</Button>
      <Button onClick={handleClose}>Отмена</Button>
    </Dialog>
  );
};

export default AddSubjectDialog;
