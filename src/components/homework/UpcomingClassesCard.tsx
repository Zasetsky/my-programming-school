import React from 'react';
import useUpcomingClassesCard from '../../hooks/homework/useUpcomingClassesCard';

import {
  Card,
  CardContent,
  Typography,
  Button,
  Tooltip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Skeleton,
} from '@mui/material';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import '../../assets/styles/components/homework/upcoming-classes-card.scss';

const UpcomingClassesCard: React.FC<{ isLoading: boolean }> = ({
  isLoading,
}) => {
  const {
    dialogOpen,
    selectedDate,
    uniqueLessons,
    scrollRef,
    selectedLessonDate,
    currentDate,
    parseDate,
    handleScroll,
    handleClickCard,
    hasHomework,
    handleOpenDialog,
    handleCloseDialog,
  } = useUpcomingClassesCard();

  return (
    <div className="upcoming-classes-card__controls">
      {isLoading ? (
        // Показать заглушки, если данные загружаются
        <>
          <Skeleton variant="text" width={60} height={36} />{' '}
          {/* Кнопка "Влево" */}
          <div className="upcoming-classes-card__scroll-container">
            {/* Итерируемся несколько раз для создания скелетонов карточек */}
            {[1, 2, 3, 4, 5].map((_, index) => (
              <Skeleton
                key={index}
                variant="rectangular"
                width={100}
                height={118}
              />
            ))}
          </div>
          <Skeleton variant="text" width={70} height={36} />{' '}
          {/* Кнопка "Вправо" */}
        </>
      ) : (
        <>
          <Button onClick={() => handleScroll('left')}>Влево</Button>
          <div
            ref={scrollRef}
            className="upcoming-classes-card__scroll-container"
          >
            {uniqueLessons.map((lesson, index) => {
              const date = parseDate(lesson.lessonDate);
              const dayOfWeek = date.toLocaleString('ru', { weekday: 'short' });
              const dayOfMonth = date.getDate();
              const isActive = lesson.lessonDate === selectedDate;

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
                    <Tooltip title="Перенести занятие" arrow>
                      <EditCalendarIcon
                        style={{
                          width: '20px',
                          height: '20px',
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.color = 'var(--primary-main)'; // Цвет при наведении
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.color = 'inherit'; // Цвет при отведении курсора
                        }}
                        onClick={() => handleOpenDialog(lesson.lessonDate)}
                      />
                    </Tooltip>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <Button onClick={() => handleScroll('right')}>Вправо</Button>

          <Dialog open={dialogOpen} onClose={handleCloseDialog}>
            <DialogTitle>Перенос занятия</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Текущая дата: {selectedLessonDate}
              </DialogContentText>
              <TextField
                value={currentDate}
                autoFocus
                margin="dense"
                type="date"
                fullWidth
                // ... (обработчики изменения и т.д.)
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog} color="primary">
                Отмена
              </Button>
              <Button color="primary">Сохранить</Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </div>
  );
};

export default UpcomingClassesCard;
