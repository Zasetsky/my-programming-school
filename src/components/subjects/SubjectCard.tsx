import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Subject } from './types';
import { useNavigate } from 'react-router-dom';
import {
  selectModules,
  fetchModulesForSubject,
} from '../../slices/modulesSlice';
import { AppDispatch } from '../../redux/store';

import {
  Card,
  CardContent,
  Typography,
  Button,
  LinearProgress,
} from '@mui/material';
import '../../assets/styles/components/subjects/subject-card.scss';

interface SubjectCardProps {
  subject: Subject;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subject }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const modules = useSelector(selectModules);

  const lastModule =
    modules.length > 0 ? modules[modules.length - 1] : undefined;

  const shouldShowNextLesson =
    lastModule && lastModule.status === 'paid' && lastModule.next_lesson_date; // Добавить логику для проверки, что дата не равна прошлому

  const handleDetailsClick = () => {
    const uniqueID = localStorage.getItem('uniqueID') || '';
    navigate(`/${subject.subject_code}/${uniqueID}`);
  };

  useEffect(() => {
    if (subject) {
      dispatch(fetchModulesForSubject(subject.id));
    }
  }, []);

  return (
    <Card className="subject-card">
      <CardContent className="subject-card__content">
        <div className="subject-card__header">
          <Typography variant="h5" className="subject-card__text">
            {subject.name}
          </Typography>
          {shouldShowNextLesson && (
            <Typography variant="body2" className="subject-card__next-lesson">
              Следующий урок: {lastModule?.next_lesson_date}
            </Typography>
          )}
        </div>

        {lastModule ? (
          <div className="subject-card__module">
            <Typography variant="inherit">{lastModule.name}</Typography>
            {lastModule.status === 'unpaid' && (
              <Typography variant="body2" color="error">
                Не оплачено
              </Typography>
            )}
            {lastModule.status === 'paid' && (
              <>
                <Typography variant="body2" color="textSecondary">
                  {`Пройдено уроков: ${lastModule.completed_lesson_count} из ${lastModule.total_lesson_count}`}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={
                    (lastModule.completed_lesson_count /
                      lastModule.total_lesson_count) *
                    100
                  }
                />
              </>
            )}
          </div>
        ) : (
          <Typography variant="body2" className="subject-card__no-modules">
            У вас пока нет модулей
          </Typography>
        )}

        <Button
          variant="text"
          className="subject-card__button"
          onClick={handleDetailsClick}
        >
          Подробнее
        </Button>
      </CardContent>
    </Card>
  );
};

export default SubjectCard;
