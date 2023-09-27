import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { fetchLessons, fetchHomeworks } from '../slices/homeworkSlice';
import UpcomingClassesCard from '../components/homework/UpcomingClassesCard';
import HomeworkCard from '../components/homework//HomeworkCard';
import Calendar from '../components/homework/Calendar';
import { Homework } from '../assets/icons/index';
import '../assets/styles/components/homework/homework-page.scss';

const HomeworkPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentMonth = new Date().toLocaleString('ru', { month: 'long' });

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
        <div className="homework-page__content-wrapper">
          <h2>{currentMonth}</h2>
          <UpcomingClassesCard />
          <HomeworkCard />
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default HomeworkPage;
