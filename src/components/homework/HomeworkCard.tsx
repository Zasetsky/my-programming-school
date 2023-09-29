import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { Card, CardContent, Typography } from '@mui/material';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import '../../assets/styles/components/homework/homework-card.scss';

const HomeworkCard: React.FC<{ showCalendar: boolean }> = ({
  showCalendar,
}) => {
  const selectedDate = useSelector(
    (state: RootState) => state.lessons.selectedDate,
  );
  const lessons = useSelector((state: RootState) => state.lessons.lessons);
  const homeworks = useSelector((state: RootState) => state.lessons.homeworks);
  const [date, setDate] = useState(dayjs());

  const lessonsForDate = lessons.filter(
    (lesson) => lesson.lessonDate === selectedDate,
  );

  return (
    <Card className="homework-card">
      <CardContent className="homework-card__content">
        {showCalendar ? (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              value={date}
              onChange={(newDate) => {
                setDate(dayjs(newDate));
              }}
            />
          </LocalizationProvider>
        ) : (
          lessonsForDate.map((lesson, index) => {
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
          })
        )}
      </CardContent>
    </Card>
  );
};

export default HomeworkCard;
