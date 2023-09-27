import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { Card, CardContent, Typography } from '@mui/material';

const HomeworkCard: React.FC = () => {
  const selectedDate = useSelector(
    (state: RootState) => state.lessons.selectedDate,
  );
  const homeworks = useSelector((state: RootState) => state.lessons.homeworks);

  const homework = homeworks.find((hw) => hw.homeworkDate === selectedDate);

  return (
    <Card>
      <CardContent>
        {homework ? (
          <>
            <div style={{ display: 'flex', alignItems: 'baseline' }}>
              <Typography variant="h6">{homework.startTime}</Typography>
              <Typography variant="h6">{homework.moduleName}</Typography>
            </div>
            <Typography variant="body2">{homework.homeworkText}</Typography>
          </>
        ) : (
          <Typography variant="body2">
            Нет домашней работы на выбранную дату
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default HomeworkCard;
