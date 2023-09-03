import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Subject } from '../components/subjects/types';

interface SubjectsState {
  subjects: Subject[];
}

const initialState: SubjectsState = {
  subjects: [
    {
      id: 'modules-web',
      name: 'Web разработка',
      modules: [
        {
          id: '3214321514213',
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
      state.subjects.push({ id: 'id', name: action.payload, modules: [] });
    },
  },
});

export const { addSubject } = subjectsSlice.actions;

export default subjectsSlice.reducer;
