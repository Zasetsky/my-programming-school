import { combineReducers } from 'redux';
import authReducer from '../slices/authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  // другие редюсеры
});

export default rootReducer;
