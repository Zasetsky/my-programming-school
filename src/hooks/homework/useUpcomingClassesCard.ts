import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectLessons,
  selectHomeworks,
  setSelectedDate,
  selectSelectedDate,
} from '../../slices/homeworkSlice';
import { Lesson } from '../../components/homework/types';

const useUpcomingClassesCard = () => {
  const dispatch = useDispatch();
  const lessons = useSelector(selectLessons);
  const scrollRef = useRef<HTMLDivElement>(null);
  const selectedDate = useSelector(selectSelectedDate);
  const [uniqueLessons, setUniqueLessons] = useState<Lesson[]>([]);
  const homeworks = useSelector(selectHomeworks);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [selectedLessonDate, setSelectedLessonDate] = useState<string | null>(
    null,
  );
  const [currentDate, setCurrentDate] = useState<string>('');

  const hasHomework = (date: string) => {
    return homeworks.some((hw) => hw.homeworkDate === date);
  };

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

    setUniqueLessons(filteredLessons);

    const closestLesson = findClosestLesson(filteredLessons);
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

  const handleOpenDialog = (lessonDate: string) => {
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${String(
      today.getMonth() + 1,
    ).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    setCurrentDate(formattedDate); // Инициализация текущей даты

    setDialogOpen(true);
    setSelectedLessonDate(lessonDate);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedLessonDate(null);
  };

  return {
    dialogOpen,
    selectedDate,
    uniqueLessons,
    scrollRef,
    selectedLessonDate,
    currentDate,
    setDialogOpen,
    setSelectedLessonDate,
    parseDate,
    handleScroll,
    handleClickCard,
    hasHomework,
    handleOpenDialog,
    handleCloseDialog,
  };
};

export default useUpcomingClassesCard;
