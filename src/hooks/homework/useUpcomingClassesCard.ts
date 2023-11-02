import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllLessons,
  selectSelectedDate,
  setSelectedDate,
  // rescheduleLesson,
  selectLessonsStatus,
} from '../../slices/lessonsSlice';
import { Lesson } from '../../components/homework/types';

const useUpcomingClassesCard = () => {
  const dispatch = useDispatch();
  const lessons = useSelector(selectAllLessons);
  const scrollRef = useRef<HTMLDivElement>(null);
  const selectedDate = useSelector(selectSelectedDate);
  const [uniqueLessons, setUniqueLessons] = useState<Lesson[]>([]);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [selectedLessonDate, setSelectedLessonDate] = useState<string | null>(
    null,
  );
  const [currentDate, setCurrentDate] = useState<string>('');
  // const selectedLesson = lessons.find(
  //   (lesson) => lesson.lesson_date === selectedLessonDate,
  // );
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');
  const [snackbarType, setSnackbarType] = useState<'success' | 'error'>(
    'success',
  );
  const status = useSelector(selectLessonsStatus);

  function hasHomeworkOnDate(date: string) {
    return lessons.some(
      (lesson) => lesson.lesson_date === date && lesson.homework,
    );
  }

  const parseDate = (dateString: string) => {
    const [year, month, day] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day);
  };

  const findClosestLesson = (lessonsToSearch: Lesson[]) => {
    return lessonsToSearch.find((lesson) => parseDate(lesson.lesson_date));
  };

  useEffect(() => {
    const uniqueDates: string[] = [];
    const filteredLessons = lessons.filter((lesson: Lesson) => {
      if (!uniqueDates.includes(lesson.lesson_date)) {
        uniqueDates.push(lesson.lesson_date);
        return true;
      }
      return false;
    });

    setUniqueLessons(
      filteredLessons.map((lesson) => ({
        ...lesson,
      })),
    );

    const closestLesson = findClosestLesson(filteredLessons);
    if (closestLesson) {
      dispatch(setSelectedDate(closestLesson.lesson_date));
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

  const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentDate(event.target.value);
  };

  const openSnackbar = (message: string, type: 'success' | 'error') => {
    setSnackbarMessage(message);
    setSnackbarType(type);
    setSnackbarOpen(true);
  };

  const closeSnackbar = () => {
    setSnackbarOpen(false);
  };

  // const handleReschedule = async () => {
  //   if (!selectedLessonDate || !currentDate) {
  //     return;
  //   }

  //   const formattedCurrentDate = formatDate(currentDate);

  //   if (selectedLesson) {
  //     const { subjectId, moduleId } = selectedLesson;

  //     try {
  //       const response = await rescheduleLesson(
  //         subjectId,
  //         moduleId,
  //         formattedCurrentDate,
  //         selectedLessonDate,
  //       );
  //       if (response.success) {
  //         openSnackbar(response.message, 'success');
  //       } else {
  //         openSnackbar(response.message, 'error');
  //       }
  //     } catch (error) {
  //       console.error('Произошла ошибка при переносе', error);
  //     }
  //   }
  // };

  return {
    dialogOpen,
    selectedDate,
    uniqueLessons,
    scrollRef,
    selectedLessonDate,
    currentDate,
    snackbarOpen,
    snackbarMessage,
    snackbarType,
    status,
    setDialogOpen,
    setSelectedLessonDate,
    parseDate,
    handleScroll,
    handleClickCard,
    hasHomeworkOnDate,
    handleOpenDialog,
    handleCloseDialog,
    handleChangeDate,
    // handleReschedule,
    openSnackbar,
    closeSnackbar,
  };
};

export default useUpcomingClassesCard;
