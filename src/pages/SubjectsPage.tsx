import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import { Button } from '@mui/material';
import AddSubjectDialog from '../components/subjects/AddSubjectDialog';
import SubjectCard from '../components/subjects/SubjectCard';
import { addSubject } from '../slices/subjectsSlice';

const SubjectsPage: React.FC = () => {
  const dispatch = useDispatch();
  const subjects = useSelector((state: RootState) => state.subjects.subjects);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleAddSubject = (name: string) => {
    dispatch(addSubject(name));
    setDialogOpen(false);
  };

  return (
    <div>
      <AddSubjectDialog
        open={dialogOpen}
        setOpen={setDialogOpen}
        addSubject={handleAddSubject}
      />
      <div>
        {subjects.map((subject, index) => (
          <SubjectCard key={index} subject={subject} />
        ))}
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setDialogOpen(true)}
      >
        Добавить предмет
      </Button>
    </div>
  );
};

export default SubjectsPage;
