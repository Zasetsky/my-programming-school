import { combineReducers } from '@reduxjs/toolkit';
import subjectsReducer from '../slices/subjectsSlice';
import homeworkReducer from '../slices/homeworkSlice';

const rootReducer = combineReducers({
  subjects: subjectsReducer,
  lessons: homeworkReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
