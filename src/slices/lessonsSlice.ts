import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../redux/rootReducer';
import { LessonState } from '../components/homework/types';
import {
  fetchAllUserLessons,
  apiRescheduleLesson,
  apiSetHomework,
} from '../api/lessonsApi';

// Thunk для получения уроков пользователя
export const fetchLessons = createAsyncThunk(
  'lessons/fetchLessons',
  async () => {
    try {
      const lessons = await fetchAllUserLessons();

      return lessons;
    } catch (error) {
      console.error('Error fetching lessons:', error);
    }
  },
);

// Thunk для переноса урока
export const rescheduleLesson = createAsyncThunk(
  'lessons/rescheduleLesson',
  async (
    {
      lessonId,
      newDate,
      newTime,
    }: { lessonId: number; newDate?: string; newTime?: string },
    { rejectWithValue },
  ) => {
    try {
      const response = await apiRescheduleLesson(lessonId, newDate, newTime);
      return response;
    } catch (error) {
      return rejectWithValue('Unable to reschedule lesson');
    }
  },
);

// Thunk для добавления домашнего задания
export const setHomework = createAsyncThunk(
  'lessons/setHomework',
  async (
    { lessonId, homework }: { lessonId: number; homework: string },
    { rejectWithValue },
  ) => {
    try {
      const response = await apiSetHomework(lessonId, homework);
      return response;
    } catch (error) {
      return rejectWithValue('Unable to set homework');
    }
  },
);

const initialState: LessonState = {
  lessons: [],
  selectedDate: undefined,
  status: 'idle',
  error: null,
};

const lessonsSlice = createSlice({
  name: 'lessons',
  initialState,
  reducers: {
    setSelectedDate: (state, action: PayloadAction<string | undefined>) => {
      state.selectedDate = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchLessons.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLessons.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.lessons = action.payload;
      })
      .addCase(fetchLessons.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(rescheduleLesson.fulfilled, (state, action) => {
        // Обработка успешного переноса урока
        // Например, обновление времени урока в state
      })
      .addCase(setHomework.fulfilled, (state, action) => {
        // Обработка успешного добавления домашнего задания
        // Например, обновление домашнего задания урока в state
      });
    // Добавьте обработку для других состояний, если необходимо
  },
});

export const { setSelectedDate } = lessonsSlice.actions;

export const selectAllLessons = (state: RootState) => state.lessons.lessons;

export const selectSelectedDate = (state: RootState) =>
  state.lessons.selectedDate;

export const selectLessonById = (state: RootState, lessonId: number) =>
  state.lessons.lessons.find((lesson) => lesson.id === lessonId);

export const selectLessonsStatus = (state: RootState) => state.lessons.status;

export default lessonsSlice.reducer;
