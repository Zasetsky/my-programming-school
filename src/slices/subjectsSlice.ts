import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Subject } from '../components/subjects/types';
import { Module } from '../components/modules/types';

interface SubjectsState {
  subjects: Subject[];
}

const initialState: SubjectsState = {
  subjects: [
    {
      name: 'Web разработка',
      modules: [
        {
          name: 'Введение в HTML',
          totalLessonCount: 4,
          completedLessonCount: 2,
          status: 'paid',
          startDate: '2023-09-01',
          endDate: '2023-10-01',
          grade: 'danger',
          comment: 'Нужно больше практики',
          lessonDays: ['Monday', 'Wednesday'],
          startTime: '14:00',
          duration: '1h 30m',
          nextLessonDate: '13/09/2023',
        },
      ],
    },
  ],
};

const subjectsSlice = createSlice({
  name: 'subjects',
  initialState,
  reducers: {
    addSubject: (state, action: PayloadAction<string>) => {
      state.subjects.push({ name: action.payload, modules: [] });
    },
    addModuleToSubject: (
      state,
      action: PayloadAction<{ subjectName: string; module: Module }>,
    ) => {
      const subject = state.subjects.find(
        (s) => s.name === action.payload.subjectName,
      );
      if (subject) {
        subject.modules.push(action.payload.module);
      }
    },
  },
});

export const { addSubject, addModuleToSubject } = subjectsSlice.actions;

export default subjectsSlice.reducer;
