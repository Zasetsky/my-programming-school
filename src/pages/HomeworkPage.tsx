import React from 'react';
import UpcomingClassesCard from '../components/homework/UpcomingClassesCard';
import HomeworkCard from '../components/homework//HomeworkCard';
import Calendar from '../components/homework/Calendar';

const HomeworkPage: React.FC = () => {
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  return (
    <div className="homework-page">
      <h1>Страница Домашнего Задания</h1>
      <h2>{currentMonth}</h2>
      <UpcomingClassesCard />
      <HomeworkCard />
      <Calendar />
    </div>
  );
};

export default HomeworkPage;
