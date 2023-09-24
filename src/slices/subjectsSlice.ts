import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../redux/rootReducer';
import { Subject, Module } from '../components/subjects/types';
import {
  fetchSubjectsFromServer,
  addSubjectToServer,
  addModuleToSubjectOnServer,
  updateModuleInSubjectOnServer,
  updateSubjectOnServer,
} from '../api/subjects';

interface SubjectsState {
  subjects: Subject[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}
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

export const addModuleToSubjectAsync = createAsyncThunk(
  'subjects/addModuleToSubject',
  async ({ subjectId, module }: { subjectId: string; module: Module }) => {
    const newModule = await addModuleToSubjectOnServer(subjectId, module);
    return { subjectId, newModule };
  },
);

export const updateSubjectAsync = createAsyncThunk(
  'subjects/updateSubject',
  async ({
    subjectId,
    updatedSubject,
  }: {
    subjectId: string;
    updatedSubject: Subject;
  }) => {
    const updated = await updateSubjectOnServer(subjectId, updatedSubject);
    return { subjectId, updated };
  },
);

export const updateModuleInSubjectAsync = createAsyncThunk(
  'subjects/updateModuleInSubject',
  async ({
    subjectId,
    moduleId,
    updatedModule,
  }: {
    subjectId: string;
    moduleId: string;
    updatedModule: Module;
  }) => {
    const updated = await updateModuleInSubjectOnServer(
      subjectId,
      moduleId,
      updatedModule,
    );
    return { subjectId, moduleId, updated };
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
      .addCase(addModuleToSubjectAsync.fulfilled, (state, action) => {
        const subject = state.subjects.find(
          (s) => s.id === action.payload.subjectId,
        );
        if (subject) {
          subject.modules.push(action.payload.newModule);
        }
      })
      .addCase(updateSubjectAsync.fulfilled, (state, action) => {
        const subjectIndex = state.subjects.findIndex(
          (s) => s.id === action.payload.subjectId,
        );
        if (subjectIndex !== -1) {
          state.subjects[subjectIndex] = action.payload.updated;
        }
      })
      .addCase(updateModuleInSubjectAsync.fulfilled, (state, action) => {
        const subject = state.subjects.find(
          (s) => s.id === action.payload.subjectId,
        );
        if (subject) {
          const moduleIndex = subject.modules.findIndex(
            (m) => m.id === action.payload.moduleId,
          );
          if (moduleIndex !== -1) {
            subject.modules[moduleIndex] = action.payload.updated;
          }
        }
      });
  },
});

export const selectSubjectById = (state: RootState, subjectId: string) => {
  return state.subjects.subjects.find((subject) => subject.id === subjectId);
};

export const selectModulesBySubjectId = (
  state: RootState,
  subjectId: string,
) => {
  const subject = state.subjects.subjects.find((s) => s.id === subjectId);
  return subject ? subject.modules : [];
};

export default subjectsSlice.reducer;
