import { combineReducers } from '@reduxjs/toolkit';
import subjectsReducer from '../slices/subjectsSlice';
import lessonReducer from '../slices/lessonsSlice';

const rootReducer = combineReducers({
  subjects: subjectsReducer,
  lessons: lessonReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
