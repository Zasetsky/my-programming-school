import React from 'react';
import useHomeworkPage from '../hooks/homework/useHomeworkPage';
import { Skeleton, useMediaQuery } from '@mui/material';

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
    isLoading,
    toggleCalendar,
  } = useHomeworkPage();

  // Хук для определения ширины экрана
  const matches = useMediaQuery('(max-width:768px)');
  // Выбор значения 'top' в зависимости от ширины экрана
  const backButtonTop = matches ? '130px' : '110px';

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

      <BackButton top={backButtonTop} />

      <div className="homework-page__content">
        <div className="homework-page__calendar">
          <div className="homework-page__calendar-month">
            {isLoading ? (
              <>
                <Skeleton
                  variant="text"
                  width={100}
                  style={{ marginTop: '20px' }}
                />
                <Skeleton
                  variant="text"
                  width={60}
                  style={{ marginBottom: '20px' }}
                />
              </>
            ) : (
              <>
                <h2>
                  {currentMonth}, {selectedDay}
                </h2>
                <p>В выбранную дату {homeworksCountForSelectedDate} ДЗ</p>
              </>
            )}
          </div>

          {isLoading ? (
            <Skeleton variant="circular" width={40} height={40} />
          ) : (
            <div
              className={`homework-page__calendar-icon ${
                showCalendar ? 'active' : ''
              }`}
              onClick={toggleCalendar}
            >
              <CalendarMonthIcon sx={{ color: 'var(--background-default)' }} />
            </div>
          )}
        </div>
        <UpcomingClassesCard isLoading={isLoading} />
        <HomeworkCard showCalendar={showCalendar} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default HomeworkPage;
