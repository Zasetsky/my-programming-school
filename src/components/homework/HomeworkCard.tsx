import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomDay from './CustomDay';
import { AppDispatch } from '../../redux/store';
import {
  selectAllLessons,
  selectSelectedDate,
  setSelectedDate,
  selectLessonsStatus,
} from '../../slices/lessonsSlice';
import { Card, CardContent, Typography, Skeleton } from '@mui/material';
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
  const selectedDate = useSelector(selectSelectedDate);
  const lessons = useSelector(selectAllLessons);
  const status = useSelector(selectLessonsStatus);
  const [date, setDate] = useState(
    selectedDate ? dayjs(selectedDate) : dayjs(),
  );

  const lessonsForDate = lessons.filter(
    (lesson) => lesson.lesson_date === selectedDate,
  );

  const lessonDays = lessons.map((lesson) => lesson.lesson_date);

  const lessonsForDateSorted = lessonsForDate.sort((a, b) => {
    const timeA = dayjs(a.start_time, 'HH:mm:ss');
    const timeB = dayjs(b.start_time, 'HH:mm:ss');
    return timeA.isBefore(timeB) ? -1 : 1;
  });

  useEffect(() => {
    if (selectedDate) {
      setDate(dayjs(selectedDate));
    }
  }, [selectedDate]);

  return (
    <Card className="homework-card">
      <CardContent className="homework-card__content">
        {status === 'loading' ? (
          [1, 2, 3].map((_, index) => (
            <div key={index} className="homework-card__lesson-item">
              <div className="homework-card__lesson-block">
                <Skeleton variant="text" width={60} height={30} />
                <Skeleton
                  variant="text"
                  width={150}
                  height={30}
                  style={{ marginLeft: '10px' }}
                />
              </div>
              <div className="homework-card__homework-block">
                <Skeleton
                  variant="text"
                  width={300}
                  height={20}
                  style={{ marginLeft: '20px' }}
                />
              </div>
            </div>
          ))
        ) : showCalendar ? (
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
            <DateCalendar
              value={date}
              onChange={(newDate) => {
                if (newDate) {
                  const formattedDate = newDate.format('YYYY-MM-DD');
                  setDate(newDate);
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
          lessonsForDateSorted.map((lesson, index) => (
            <div key={index} className="homework-card__lesson-item">
              <div className="homework-card__lesson-block">
                <Typography variant="h6">
                  {dayjs(lesson.start_time, 'HH:mm:ss').format('HH:mm')}
                </Typography>
                <Typography sx={{ margin: '0 10px' }} variant="h6">
                  {lesson.subject_name}
                </Typography>
              </div>
              <div className="homework-card__homework-block">
                {lesson.homework ? (
                  <Typography sx={{ marginLeft: '20px' }} variant="body2">
                    {lesson.homework}
                  </Typography>
                ) : (
                  <Typography sx={{ marginLeft: '20px' }} variant="body2">
                    Нет домашней работы на выбранную дату
                  </Typography>
                )}
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
};

export default HomeworkCard;
