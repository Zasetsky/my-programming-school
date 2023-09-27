import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import { AppDispatch } from '../redux/store';
import { Card, CardContent, CircularProgress, Typography } from '@mui/material';
// import AddSubjectDialog from '../components/subjects/AddSubjectDialog';
import SubjectCard from '../components/subjects/SubjectCard';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import BackButton from '../components/BackButton';
import { fetchSubjectsAsync } from '../slices/subjectsSlice';

import '../assets/styles/components/subject-page.scss';

const SubjectsPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const subjects = useSelector((state: RootState) => state.subjects.subjects);
  const status = useSelector((state: RootState) => state.subjects.status);
  // const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchSubjectsAsync());
  }, [dispatch]);

  // const handleAddSubject = (name: string) => {
  //   dispatch(addSubject(name));
  //   setDialogOpen(false);
  // };

  return (
    <div className="subject-page">
      <div className="subject-page__title">
        <LibraryBooksIcon style={{ fontSize: 50 }} />
        <h1>Модули и оценки</h1>
      </div>

      <BackButton top={'110px'} />

      {/* <AddSubjectDialog
        open={dialogOpen}
        setOpen={setDialogOpen}
        addSubject={handleAddSubject}
      /> */}

      <div className="subject-page__cards">
        {status === 'loading' ? (
          <CircularProgress />
        ) : subjects.length > 0 ? (
          subjects.map((subject, index) => (
            <SubjectCard key={index} subject={subject} />
          ))
        ) : (
          <Card className="subject-page__empty-message">
            <CardContent>
              <Typography variant="body2">
                У вас пока нет тем для обучения
              </Typography>
            </CardContent>
          </Card>
        )}
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
