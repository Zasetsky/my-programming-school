import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { selectLessons } from '../../slices/homeworksSlice';
import '../../assets/styles/components/homework/upcoming-classes-card.scss';

const UpcomingClassesCard: React.FC = () => {
  const lessons = useSelector(selectLessons);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (container) {
      container.scrollBy({
        left: direction === 'right' ? 80 : -80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Card>
      <CardContent>
        {/* <Typography variant="h5" className="upcoming-classes-card__header">
          Предстоящие занятия
        </Typography> */}
        <div className="upcoming-classes-card__controls">
          <Button onClick={() => handleScroll('left')}>Влево</Button>
          <div
            ref={scrollRef}
            className="upcoming-classes-card__scroll-container"
          >
            {lessons.map((lesson, index) => (
              <Card key={index} className="upcoming-classes-card__card">
                <CardContent>
                  <Typography variant="body2">{lesson.lessonDate}</Typography>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button onClick={() => handleScroll('right')}>Вправо</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingClassesCard;
