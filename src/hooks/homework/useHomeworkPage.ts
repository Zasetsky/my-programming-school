import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import {
  fetchLessons,
  fetchHomeworks,
  selectLessons,
} from '../../slices/homeworkSlice';
import {
  selectSelectedDate,
  selectDataForSelectedDate,
} from '../../slices/homeworkSlice';

const useHomeworkPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const lessons = useSelector(selectLessons);

  const selectedDate = useSelector(selectSelectedDate);
  const { homeworks } = useSelector(selectDataForSelectedDate);
  const [showCalendar, setShowCalendar] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const homeworksCountForSelectedDate = homeworks.length;

  let currentMonth: string;
  let selectedDay: string;

  if (selectedDate) {
    const [day, month, year] = selectedDate.split('-').map(Number);
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
    (lesson) => lesson.lessonDate === formattedToday,
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
    // Предположим, fetchLessons и fetchHomeworks возвращают промисы
    Promise.all([dispatch(fetchLessons()), dispatch(fetchHomeworks())]).then(
      () => {
        setIsLoading(false);
      },
    );
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
    isLoading,
    toggleCalendar,
  };
};

export default useHomeworkPage;
