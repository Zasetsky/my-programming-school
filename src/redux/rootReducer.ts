import { combineReducers } from '@reduxjs/toolkit';
import subjectsReducer from '../slices/subjectsSlice';
import lessonReducer from '../slices/lessonsSlice';
import modulesReducer from '../slices/modulesSlice';

const rootReducer = combineReducers({
  subjects: subjectsReducer,
  lessons: lessonReducer,
  modules: modulesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
