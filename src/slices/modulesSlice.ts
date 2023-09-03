import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../redux/rootReducer';
import { Module } from '../components/modules/types';

export const addModuleToSubjectAsync = createAsyncThunk(
  'modules/addModuleToSubject',
  async (payload: { subjectId: string; module: Module }, { getState }) => {
    const state: RootState = getState() as RootState;
    const subject = state.subjects.subjects.find(
      (s) => s.id === payload.subjectId,
    );
    if (subject) {
      subject.modules.push(payload.module);
    }
  },
);

const modulesSlice = createSlice({
  name: 'modules',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addModuleToSubjectAsync.fulfilled, (state, action) => {
      // Здесь можно обновить состояние, если нужно
    });
  },
});

// Селектор для получения модулей конкретного предмета
export const selectModulesBySubjectId = (
  state: RootState,
  subjectId: string,
) => {
  const subject = state.subjects.subjects.find((s) => s.id === subjectId);
  return subject ? subject.modules : [];
};

export default modulesSlice.reducer;
