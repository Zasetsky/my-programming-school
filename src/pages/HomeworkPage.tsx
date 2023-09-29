import React from 'react';
import useHomeworkPage from '../hooks/homework/useHomeworkPage';

import UpcomingClassesCard from '../components/homework/UpcomingClassesCard';
import HomeworkCard from '../components/homework//HomeworkCard';
import BackButton from '../components/BackButton';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Homework } from '../assets/icons/index';

import '../assets/styles/components/homework/homework-page.scss';

const HomeworkPage: React.FC = () => {
  const {
    currentMonth,
    selectedDay,
    lessonsForToday,
    word,
    homeworksCountForSelectedDate,
    showCalendar,
    toggleCalendar,
  } = useHomeworkPage();

  return (
    <div className="homework-page">
      <div className="homework-page__header">
        <div className="homework-page__title">
          <Homework />
          <h1>Домашняя работа/расписание</h1>
        </div>
        <h3>
          Сегодня {lessonsForToday.length} {word}
        </h3>
      </div>

      <BackButton top={'110px'} />

      <div className="homework-page__content">
        <div className="homework-page__calendar">
          <div className="homework-page__calendar-month">
            <h2>
              {currentMonth}, {selectedDay}
            </h2>
            <p>В выбранную дату {homeworksCountForSelectedDate} ДЗ</p>
          </div>

          <div
            className="homework-page__calendar-icon"
            onClick={toggleCalendar}
          >
            <CalendarMonthIcon sx={{ color: 'var(--background-default)' }} />
          </div>
        </div>
        <UpcomingClassesCard />
        <HomeworkCard showCalendar={showCalendar} />
      </div>
    </div>
  );
};

export default HomeworkPage;
