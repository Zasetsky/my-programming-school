import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../redux/store';
import {
  fetchLessons,
  fetchHomeworks,
  selectLessons,
} from '../slices/homeworkSlice';
import UpcomingClassesCard from '../components/homework/UpcomingClassesCard';
import HomeworkCard from '../components/homework//HomeworkCard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Homework } from '../assets/icons/index';
import '../assets/styles/components/homework/homework-page.scss';

const HomeworkPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const lessons = useSelector(selectLessons);
  const currentMonth = new Date().toLocaleString('ru', { month: 'long' });

  const today = new Date();
  const formattedToday = `${String(today.getDate()).padStart(2, '0')}-${String(
    today.getMonth() + 1,
  ).padStart(2, '0')}-${today.getFullYear()}`;

  const lessonsForToday = lessons.filter(
    (lesson) => lesson.lessonDate === formattedToday,
  );

  function pluralizeRussian(count: number, words: [string, string, string]) {
    const cases = [2, 0, 1, 1, 1, 2];
    return words[
      count % 100 > 4 && count % 100 < 20 ? 2 : cases[Math.min(count % 10, 5)]
    ];
  }

  const lessonsCount = lessonsForToday.length;
  const word = pluralizeRussian(lessonsCount, ['урок', 'урока', 'уроков']);

  useEffect(() => {
    dispatch(fetchLessons());
    dispatch(fetchHomeworks());
  }, [dispatch]);

  return (
    <div className="homework-page">
      <div className="homework-page__title">
        <Homework />
        <h1>Домашняя работа/расписание</h1>
      </div>

      <div className="homework-page__content">
        <div className="homework-page__calendar">
          <div className="homework-page__calendar-month">
            <h2>{currentMonth}</h2>
            <p>
              Сегодня {lessonsForToday.length} {word}
            </p>
          </div>

          <div className="homework-page__calendar-icon">
            <CalendarMonthIcon sx={{ color: 'var(--background-default)' }} />
          </div>
        </div>
        <UpcomingClassesCard />
        <HomeworkCard />
      </div>
    </div>
  );
};

export default HomeworkPage;
