import { combineReducers } from '@reduxjs/toolkit';
import subjectsReducer from '../slices/subjectsSlice';
import homeworksReducer from '../slices/homeworksSlice';

const rootReducer = combineReducers({
  subjects: subjectsReducer,
  lessons: homeworksReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
