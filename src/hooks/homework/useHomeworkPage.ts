import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import {
  fetchLessons,
  selectAllLessons,
  selectSelectedDate,
  selectLessonsStatus,
} from '../../slices/lessonsSlice';

const useHomeworkPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const lessons = useSelector(selectAllLessons);
  const selectedDate = useSelector(selectSelectedDate);
  const [showCalendar, setShowCalendar] = useState(false);
  const status = useSelector(selectLessonsStatus);

  // Для подсчета домашних заданий используем количество уроков с домашним заданием
  const homeworksCountForSelectedDate = lessons.filter(
    (lesson) => lesson.homework && lesson.lesson_date === selectedDate,
  ).length;

  let currentMonth: string;
  let selectedDay: string;

  if (selectedDate) {
    const [year, month, day] = selectedDate.split('-').map(Number);
    const selectedDateObject = new Date(year, month - 1, day);
    currentMonth = selectedDateObject.toLocaleString('ru', { month: 'long' });
    selectedDay = String(day);
  } else {
    currentMonth = new Date().toLocaleString('ru', { month: 'long' });
    selectedDay = '';
  }

  const today = new Date();
  const formattedToday = `${String(today.getDate()).padStart(2, '0')}-${String(
    today.getMonth() + 1,
  ).padStart(2, '0')}-${today.getFullYear()}`;

  const lessonsForToday = lessons.filter(
    (lesson) => lesson.lesson_date === formattedToday,
  );

  function pluralizeRussian(count: number, words: [string, string, string]) {
    const cases = [2, 0, 1, 1, 1, 2];
    return words[
      count % 100 > 4 && count % 100 < 20 ? 2 : cases[Math.min(count % 10, 5)]
    ];
  }

  const lessonsCount = lessonsForToday.length;
  const word = pluralizeRussian(lessonsCount, ['урок', 'урока', 'уроков']);

  useEffect(() => {
    dispatch(fetchLessons());
  }, [dispatch]);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return {
    currentMonth,
    selectedDay,
    lessonsForToday,
    word,
    homeworksCountForSelectedDate,
    showCalendar,
    status,
    toggleCalendar,
  };
};

export default useHomeworkPage;
