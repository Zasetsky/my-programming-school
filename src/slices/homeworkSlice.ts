import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  createSelector,
} from '@reduxjs/toolkit';
import { RootState } from '../redux/rootReducer';
import { fetchAllUserLessons } from '../api/lessons';
import { fetchAllHomeworks } from '../api/homework';
import { Lesson, Homework } from '../components/homework/types';

// Запрос для уроков
export const fetchLessons = createAsyncThunk<Lesson[]>(
  'lessons/fetchLessons',
  async () => {
    const lessons = await fetchAllUserLessons();
    return lessons;
  },
);

// Запрос для домашних заданий
export const fetchHomeworks = createAsyncThunk<Homework[]>(
  'homeworks/fetchHomeworks',
  async () => {
    const homeworks = await fetchAllHomeworks();
    return homeworks;
  },
);

interface LessonState {
  lessons: Array<Lesson>;
  homeworks: Array<Homework>;
  selectedDate?: string;
}

const initialState: LessonState = {
  lessons: [],
  homeworks: [],
};

const homeworkSlice = createSlice({
  name: 'lessons',
  initialState,
  reducers: {
    setSelectedDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLessons.fulfilled, (state, action) => {
        state.lessons = action.payload;
      })
      .addCase(fetchHomeworks.fulfilled, (state, action) => {
        state.homeworks = action.payload;
      });
  },
});

export const { setSelectedDate } = homeworkSlice.actions;

// Селекторы
export const selectLessons = (state: RootState) => state.lessons.lessons;

export const selectHomeworks = (state: RootState) => state.lessons.homeworks;

export const selectSelectedDate = (state: RootState) =>
  state.lessons.selectedDate;

export const selectDataForSelectedDate = createSelector(
  [selectLessons, selectHomeworks, selectSelectedDate],
  (lessons, homeworks, selectedDate) => {
    if (!selectedDate) return { lessons: [], homeworks: [] };

    const lessonsForDate = lessons.filter(
      (lesson) => lesson.lessonDate === selectedDate,
    );
    const homeworksForDate = homeworks.filter(
      (hw) => hw.homeworkDate === selectedDate,
    );

    return { lessons: lessonsForDate, homeworks: homeworksForDate };
  },
);

export default homeworkSlice.reducer;
