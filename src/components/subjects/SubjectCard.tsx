import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  LinearProgress,
} from '@mui/material';
import { Subject } from './types';
import { useNavigate } from 'react-router-dom';

import '../../assets/styles/components/subject-card.scss';

interface SubjectCardProps {
  subject: Subject;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subject }) => {
  const navigate = useNavigate();

  const lastModule =
    subject.modules.length > 0
      ? subject.modules[subject.modules.length - 1]
      : undefined;

  const shouldShowNextLesson =
    lastModule && lastModule.status === 'paid' && lastModule.nextLessonDate; // Добавить логику для проверки, что дата не равна прошлому

  const handleDetailsClick = () => {
    const uniqueID = localStorage.getItem('uniqueID') || '';
    navigate(`/${subject.subject_code}/${uniqueID}`);
  };

  return (
    <Card className="subject-card">
      <CardContent className="subject-card__content">
        <div className="subject-card__header">
          <Typography variant="h5" className="subject-card__text">
            {subject.name}
          </Typography>
          {shouldShowNextLesson && (
            <Typography variant="body2" className="subject-card__next-lesson">
              Следующий урок: {lastModule?.nextLessonDate}
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
                  {`Пройдено уроков: ${lastModule.completedLessonCount} из ${lastModule.totalLessonCount}`}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={
                    (lastModule.completedLessonCount /
                      lastModule.totalLessonCount) *
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
