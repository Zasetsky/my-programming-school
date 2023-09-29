import React from 'react';
import useUpcomingClassesCard from '../../hooks/homework/useUpcomingClassesCard';

import { Card, CardContent, Typography, Button, Tooltip } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import '../../assets/styles/components/homework/upcoming-classes-card.scss';

const UpcomingClassesCard: React.FC = () => {
  const {
    activeDate,
    uniqueLessons,
    scrollRef,
    parseDate,
    handleScroll,
    handleClickCard,
    hasHomework,
  } = useUpcomingClassesCard();

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
                {hasHomework(lesson.lessonDate) && (
                  <Tooltip
                    title="В этот день есть домашнее задание"
                    followCursor
                  >
                    <BookmarkIcon
                      style={{
                        position: 'absolute',
                        left: 0,
                        color: 'var(--error-main)',
                        top: '-5px',
                        width: '30px',
                        height: '30px',
                      }}
                    />
                  </Tooltip>
                )}
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
