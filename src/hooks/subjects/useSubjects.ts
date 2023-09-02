import { useState } from 'react';
import { Subject } from '../../components/subjects/types';

export const useSubjects = () => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [subjects, setSubjects] = useState<Subject[]>([]);

  // const addSubject = (name: string) => {
  //   setSubjects([...subjects, { name }]);
  // };

  return {
    dialogOpen,
    setDialogOpen,
    subjects,
    // addSubject,
  };
};
