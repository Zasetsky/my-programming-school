import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Subject {
  name: string;
}

interface SubjectsState {
  subjects: Subject[];
}

const initialState: SubjectsState = {
  subjects: [],
};

const subjectsSlice = createSlice({
  name: 'subjects',
  initialState,
  reducers: {
    addSubject: (state, action: PayloadAction<string>) => {
      state.subjects.push({ name: action.payload });
    },
  },
});

export const { addSubject } = subjectsSlice.actions;
export default subjectsSlice.reducer;
