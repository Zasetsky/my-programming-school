import { useState } from 'react';

interface UseAddSubjectDialogProps {
  addSubject: (name: string) => void;
}

interface UseAddSubjectDialogReturn {
  subjectName: string;
  setSubjectName: React.Dispatch<React.SetStateAction<string>>;
  handleClose: () => void;
  handleSubmit: () => void;
  open: boolean;
}

export const useAddSubjectDialog = ({
  addSubject,
}: UseAddSubjectDialogProps): UseAddSubjectDialogReturn => {
  const [subjectName, setSubjectName] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    addSubject(subjectName);
    handleClose();
  };

  return {
    subjectName,
    setSubjectName,
    handleClose,
    handleSubmit,
    open,
  };
};
