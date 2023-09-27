import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { fetchLessons } from '../slices/homeworksSlice';
import UpcomingClassesCard from '../components/homework/UpcomingClassesCard';
import HomeworkCard from '../components/homework//HomeworkCard';
import Calendar from '../components/homework/Calendar';
import { Homework } from '../assets/icons/index';
import '../assets/styles/components/homework/homework-page.scss';

const HomeworkPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  useEffect(() => {
    dispatch(fetchLessons());
  }, [dispatch]);

  return (
    <div className="homework-page">
      <div className="homework-page__title">
        <Homework />
        <h1>Домашняя работа/распиание</h1>
      </div>

      <h2>{currentMonth}</h2>
      <UpcomingClassesCard />
      <HomeworkCard />
      <Calendar />
    </div>
  );
};

export default HomeworkPage;
