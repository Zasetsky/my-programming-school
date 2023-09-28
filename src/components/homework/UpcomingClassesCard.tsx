import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { selectLessons, setSelectedDate } from '../../slices/homeworkSlice';
import '../../assets/styles/components/homework/upcoming-classes-card.scss';
import { Lesson } from './types';

const UpcomingClassesCard: React.FC = () => {
  const dispatch = useDispatch();
  const lessons = useSelector(selectLessons);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeDate, setActiveDate] = useState<string | null>(null);
  const [uniqueLessons, setUniqueLessons] = useState<Lesson[]>([]);

  const parseDate = (dateString: string) => {
    const [day, month, year] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day);
  };

  const findClosestLesson = (lessonsToSearch: Lesson[]) => {
    const today = new Date();
    return lessonsToSearch.find(
      (lesson) => parseDate(lesson.lessonDate) >= today,
    );
  };

  useEffect(() => {
    const uniqueDates: string[] = [];
    const filteredLessons = lessons.filter((lesson: Lesson) => {
      if (!uniqueDates.includes(lesson.lessonDate)) {
        uniqueDates.push(lesson.lessonDate);
        return true;
      }
      return false;
    });

    setUniqueLessons(filteredLessons); // Обновляем локальный стейт

    const closestLesson = findClosestLesson(filteredLessons);
    if (closestLesson) {
      dispatch(setSelectedDate(closestLesson.lessonDate));
      setActiveDate(closestLesson.lessonDate);
    }
  }, [dispatch, lessons]);

  const handleScroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (container) {
      container.scrollBy({
        left: direction === 'right' ? 80 : -80,
        behavior: 'smooth',
      });
    }
  };

  const handleClickCard = (lessonDate: string) => {
    dispatch(setSelectedDate(lessonDate));
    setActiveDate(lessonDate);
  };

  return (
    <div className="upcoming-classes-card__controls">
      <Button onClick={() => handleScroll('left')}>Влево</Button>
      <div ref={scrollRef} className="upcoming-classes-card__scroll-container">
        {uniqueLessons.map((lesson, index) => {
          const date = parseDate(lesson.lessonDate);
          const dayOfWeek = date.toLocaleString('ru', { weekday: 'short' });
          const dayOfMonth = date.getDate();
          const isActive = lesson.lessonDate === activeDate;

          return (
            <Card
              key={index}
              className={`upcoming-classes-card__card ${
                isActive ? 'active' : ''
              }`}
              onClick={() => handleClickCard(lesson.lessonDate)}
            >
              <CardContent className="upcoming-classes-card__card-content">
                <Typography variant="h3">{dayOfMonth}</Typography>
                <Typography variant="body1">{dayOfWeek}</Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <Button onClick={() => handleScroll('right')}>Вправо</Button>
    </div>
  );
};

export default UpcomingClassesCard;
