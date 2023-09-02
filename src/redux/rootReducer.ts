import { combineReducers } from '@reduxjs/toolkit';
import subjectsReducer from '../slices/subjectsSlice';
import modulesReducer from '../slices/modulesSlice';

const rootReducer = combineReducers({
  subjects: subjectsReducer,
  modules: modulesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
