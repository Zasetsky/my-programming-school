import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../redux/rootReducer';
import { Subject, SubjectsState } from '../components/subjects/types';
import {
  fetchSubjectsFromServer,
  addSubjectToServer,
  updateSubjectOnServer,
} from '../api/subjectsAPI';
import { createSelector } from 'reselect';

const initialState: SubjectsState = {
  subjects: [],
  status: 'idle', // idle, loading, succeeded, failed
};

export const fetchSubjectsAsync = createAsyncThunk(
  'subjects/fetchSubjects',
  async () => {
    const subjects = await fetchSubjectsFromServer();
    return subjects;
  },
);

export const addSubjectAsync = createAsyncThunk(
  'subjects/addSubject',
  async (subject: Subject) => {
    const newSubject = await addSubjectToServer(subject);
    return newSubject;
  },
);

export const updateSubjectAsync = createAsyncThunk(
  'subjects/updateSubject',
  async ({
    subjectId,
    updatedSubject,
  }: {
    subjectId: number;
    updatedSubject: Subject;
  }) => {
    const updated = await updateSubjectOnServer(subjectId, updatedSubject);
    return { subjectId, updated };
  },
);

const subjectsSlice = createSlice({
  name: 'subjects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubjectsAsync.pending, (state) => {
        state.status = 'loading'; // Здесь устанавливаем статус в 'loading'
      })
      .addCase(fetchSubjectsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded'; // Здесь устанавливаем статус в 'succeeded'
        state.subjects = action.payload; // Обновляем subjects
      })
      .addCase(fetchSubjectsAsync.rejected, (state) => {
        state.status = 'failed'; // Здесь устанавливаем статус в 'failed'
      })
      .addCase(addSubjectAsync.fulfilled, (state, action) => {
        state.subjects.push(action.payload);
      })
      .addCase(updateSubjectAsync.fulfilled, (state, action) => {
        const subjectIndex = state.subjects.findIndex(
          (s) => s.id === action.payload.subjectId,
        );
        if (subjectIndex !== -1) {
          state.subjects[subjectIndex] = action.payload.updated;
        }
      });
  },
});

export const selectSubjectBySubjectCode = (subjectCode: string | undefined) =>
  createSelector(
    (state: RootState) => state.subjects.subjects,
    (subjects) =>
      subjects.find((subject) => subject.subject_code === subjectCode),
  );

export const selectSubjects = (state: RootState) => state.subjects.subjects;

export const selectSubjectsStatus = (state: RootState) => state.subjects.status;

export default subjectsSlice.reducer;
