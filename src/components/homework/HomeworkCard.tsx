import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomDay from './CustomDay';
import { AppDispatch } from '../../redux/store';
import { RootState } from '../../redux/rootReducer';
import { setSelectedDate } from '../../slices/homeworkSlice';
import { Card, CardContent, Typography } from '@mui/material';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ru';
import '../../assets/styles/components/homework/homework-card.scss';

const HomeworkCard: React.FC<{ showCalendar: boolean }> = ({
  showCalendar,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedDate = useSelector(
    (state: RootState) => state.lessons.selectedDate,
  );
  const lessons = useSelector((state: RootState) => state.lessons.lessons);
  const homeworks = useSelector((state: RootState) => state.lessons.homeworks);
  const [date, setDate] = useState(dayjs());

  const lessonsForDate = lessons.filter(
    (lesson) => lesson.lessonDate === selectedDate,
  );

  const lessonDays = lessons.map((lesson) =>
    dayjs(lesson.lessonDate, 'DD-MM-YYYY').format('YYYY-MM-DD'),
  );
  useEffect(() => {
    if (selectedDate) {
      setDate(dayjs(selectedDate, 'DD-MM-YYYY'));
    }
  }, [selectedDate]);

  return (
    <Card className="homework-card">
      <CardContent className="homework-card__content">
        {showCalendar ? (
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
            <DateCalendar
              value={date}
              onChange={(newDate) => {
                if (newDate) {
                  const formattedDate = dayjs(newDate).format('DD-MM-YYYY');
                  setDate(dayjs(formattedDate, 'DD-MM-YYYY'));
                  dispatch(setSelectedDate(formattedDate));
                }
              }}
              slots={{
                day: CustomDay,
              }}
              slotProps={{
                day: (ownerState) => {
                  const day: Dayjs = ownerState.day;
                  return {
                    ...ownerState,
                    isLessonDay: lessonDays.includes(day.format('YYYY-MM-DD')),
                  };
                },
              }}
              shouldDisableDate={(day: Dayjs) => {
                return !lessonDays.includes(day.format('YYYY-MM-DD'));
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
