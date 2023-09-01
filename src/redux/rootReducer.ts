import { combineReducers } from '@reduxjs/toolkit';
import subjectsReducer from '../slices/subjectsSlice';

const rootReducer = combineReducers({
  subjects: subjectsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
