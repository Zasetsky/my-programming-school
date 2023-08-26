import authReducer from '../slices/authSlice';

export interface RootState {
  auth: ReturnType<typeof authReducer>;  // Используем ReturnType для определения типа состояния
}
