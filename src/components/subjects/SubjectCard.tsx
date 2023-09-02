import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  LinearProgress,
} from '@mui/material';
import { Subject } from './types';

import '../../assets/styles/components/subject-card.scss';

interface SubjectCardProps {
  subject: Subject;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subject }) => {
  const lastModule =
    subject.modules.length > 0
      ? subject.modules[subject.modules.length - 1]
      : null;

  const shouldShowNextLesson =
    lastModule && lastModule.status === 'paid' && lastModule.nextLessonDate; // Добавьте логику для проверки, что дата не равна прошлому уроку

  return (
    <Card className="subject-card">
      <CardContent className="subject-card__content">
        <div className="subject-card__header">
          <Typography variant="h5" className="subject-card__text">
            {subject.name}
          </Typography>
          {shouldShowNextLesson && (
            <Typography variant="body2" className="subject-card__next-lesson">
              Следующий урок: {lastModule.nextLessonDate}
            </Typography>
          )}
        </div>
        {lastModule === null ? (
          <Typography variant="body2" className="subject-card__no-modules">
            У вас пока нет модулей
          </Typography>
        ) : (
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
        )}
        <Button variant="text" className="subject-card__button">
          Подробнее
        </Button>
      </CardContent>
    </Card>
  );
};

export default SubjectCard;
