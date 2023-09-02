import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';
// import { Button } from '@mui/material';
// import AddSubjectDialog from '../components/subjects/AddSubjectDialog';
import SubjectCard from '../components/subjects/SubjectCard';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
// import { addSubject } from '../slices/subjectsSlice';

import '../assets/styles/components/subject-page.scss';

const SubjectsPage: React.FC = () => {
  // const dispatch = useDispatch();
  const subjects = useSelector((state: RootState) => state.subjects.subjects);
  // const [dialogOpen, setDialogOpen] = useState(false);

  // const handleAddSubject = (name: string) => {
  //   dispatch(addSubject(name));
  //   setDialogOpen(false);
  // };

  return (
    <div className="subject-page">
      <div className="subject-page__title">
        <LibraryBooksIcon style={{ fontSize: 40 }} />
        <h1>Модули и оценки</h1>
      </div>

      {/* <AddSubjectDialog
        open={dialogOpen}
        setOpen={setDialogOpen}
        addSubject={handleAddSubject}
      /> */}
      <div className="subject-page__cards">
        {subjects.map((subject, index) => (
          <SubjectCard key={index} subject={subject} />
        ))}
      </div>
      {/* <Button
        variant="contained"
        color="primary"
        onClick={() => setDialogOpen(true)}
      >
        Добавить предмет
      </Button> */}
    </div>
  );
};

export default SubjectsPage;
