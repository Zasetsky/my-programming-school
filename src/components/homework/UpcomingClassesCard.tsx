import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { selectLessons, setSelectedDate } from '../../slices/homeworkSlice';
import '../../assets/styles/components/homework/upcoming-classes-card.scss';

const UpcomingClassesCard: React.FC = () => {
  const dispatch = useDispatch();
  const lessons = useSelector(selectLessons);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const today = new Date();
    const closestLesson = lessons.find((lesson) => {
      const [day, month, year] = lesson.lessonDate.split('-').map(Number);
      const lessonDate = new Date(year, month - 1, day);
      return lessonDate >= today;
    });

    if (closestLesson) {
      dispatch(setSelectedDate(closestLesson.lessonDate));
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
  };

  return (
    <div className="upcoming-classes-card__controls">
      <Button onClick={() => handleScroll('left')}>Влево</Button>
      <div ref={scrollRef} className="upcoming-classes-card__scroll-container">
        {lessons.map((lesson, index) => {
          const [day, month, year] = lesson.lessonDate.split('-').map(Number);
          const date = new Date(year, month - 1, day);
          const dayOfWeek = date.toLocaleString('ru', { weekday: 'short' });
          const dayOfMonth = date.getDate();

          return (
            <Card
              key={index}
              className="upcoming-classes-card__card"
              onClick={() => handleClickCard(lesson.lessonDate)}
            >
              <CardContent
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
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
