import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../redux/rootReducer';
import { Module } from '../components/modules/types';
import { addModuleToSubject } from './subjectsSlice'; // Импортируем из subjectsSlice

export const addModuleToSubjectAsync = createAsyncThunk(
  'modules/addModuleToSubject',
  async (
    payload: { subjectName: string; module: Module },
    { dispatch, getState },
  ) => {
    const state: RootState = getState() as RootState;
    const subject = state.subjects.subjects.find(
      (s) => s.name === payload.subjectName,
    );
    if (subject) {
      dispatch(addModuleToSubject(payload)); // Используем из subjectsSlice
    }
  },
);

const modulesSlice = createSlice({
  name: 'modules',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addModuleToSubjectAsync.fulfilled, (state, action) => {
      // тут можно обновить состояние, если это нужно
    });
  },
});

export default modulesSlice.reducer;
