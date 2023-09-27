import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../redux/rootReducer';
import { fetchAllUserLessons } from '../api/lessons';
import { Lesson } from '../components/homework/types';

export const fetchLessons = createAsyncThunk<Lesson[]>(
  'lessons/fetchLessons',
  async () => {
    const lessons = await fetchAllUserLessons();
    return lessons;
  },
);

interface LessonState {
  lessons: Array<Lesson>;
}

const initialState: LessonState = {
  lessons: [],
};

const lessonsSlice = createSlice({
  name: 'lessons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLessons.fulfilled, (state, action) => {
      state.lessons = action.payload;
    });
  },
});

export const selectLessons = (state: RootState) => state.lessons.lessons;

export default lessonsSlice.reducer;
