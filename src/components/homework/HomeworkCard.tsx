import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { Card, CardContent, Typography } from '@mui/material';
import '../../assets/styles/components/homework/homework-card.scss';

const HomeworkCard: React.FC = () => {
  const selectedDate = useSelector(
    (state: RootState) => state.lessons.selectedDate,
  );
  const lessons = useSelector((state: RootState) => state.lessons.lessons);
  const homeworks = useSelector((state: RootState) => state.lessons.homeworks);

  const lessonsForDate = lessons.filter(
    (lesson) => lesson.lessonDate === selectedDate,
  );

  return (
    <Card className="homework-card">
      <CardContent className="homework-card__content">
        {lessonsForDate.map((lesson, index) => {
          const homework = homeworks.find(
            (hw) =>
              hw.homeworkDate === selectedDate &&
              hw.subjectName === lesson.subjectName,
          );

          return (
            <div key={index} className="homework-card__lesson-item">
              <div className="homework-card__lesson-block">
                <Typography variant="h6">{lesson.startTime}</Typography>
                <Typography sx={{ margin: '0 10px' }} variant="h6">
                  {lesson.subjectName}
                </Typography>
              </div>
              <div className="homework-card__homework-block">
                {homework ? (
                  <Typography sx={{ marginLeft: '20px' }} variant="body2">
                    {homework.homeworkText}
                  </Typography>
                ) : (
                  <Typography sx={{ marginLeft: '20px' }} variant="body2">
                    Нет домашней работы на выбранную дату
                  </Typography>
                )}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default HomeworkCard;
