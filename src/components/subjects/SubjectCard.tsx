import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Module, Subject } from './types';
import { useNavigate } from 'react-router-dom';
import { getModulesForSubject } from '../../api/modulesAPI';
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
  const [modules, setModules] = useState<Module[] | undefined>(undefined);
  const [isLoading, toggleIsLoading] = useState(false);

  const lastModule =
    modules && modules.length > 0 ? modules[modules.length - 1] : undefined;

  const shouldShowNextLesson =
    lastModule && lastModule.status === 'paid' && lastModule.next_lesson_date; // Добавить логику для проверки, что дата не равна прошлому

  const fetchModulesFromServer = async () => {
    toggleIsLoading(true);
    const response = await getModulesForSubject(subject.id);
    toggleIsLoading(false);

    setModules(response.data.modules);
  };

  const handleDetailsClick = () => {
    const uniqueID = localStorage.getItem('uniqueID') || '';
    navigate(`/${subject.subject_code}/${uniqueID}`);
  };

  useEffect(() => {
    if (subject) {
      dispatch(fetchModulesFromServer);
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

        {isLoading ? (
          <LinearProgress style={{ marginBottom: '55px' }} />
        ) : lastModule ? (
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

        {!isLoading && (
          <Button
            variant="text"
            className="subject-card__button"
            onClick={handleDetailsClick}
          >
            Подробнее
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default SubjectCard;
