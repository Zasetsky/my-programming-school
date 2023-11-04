import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ModuleState } from '../components/subjects/types';
import { RootState } from '../redux/rootReducer';
import * as modulesAPI from '../api/modulesAPI';

const initialState: ModuleState = {
  modules: [],
  status: 'idle',
  error: null,
};

// Thunk для получения модулей
export const fetchModulesForSubject = createAsyncThunk(
  'modules/fetchModulesForSubject',
  async (subjectId: number) => {
    try {
      const response = await modulesAPI.getModulesForSubject(subjectId);
      return response.data.modules;
    } catch (error) {
      console.error('Error fetching modules:', error);
    }
  },
);

// Здесь могут быть другие асинхронные thunks ...

// Определение слайса
const modulesSlice = createSlice({
  name: 'modules',
  initialState,
  reducers: {
    // Синхронные действия если нужны
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchModulesForSubject.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchModulesForSubject.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.modules = action.payload;
      })
      .addCase(fetchModulesForSubject.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

// Селектор для получения модулей
export const selectModules = (state: RootState) => state.modules.modules;

// Селектор для получения статуса запроса модулей
export const selectModulesStatus = (state: RootState) => state.modules.status;

// Селектор для получения возможной ошибки при запросе модулей
export const selectModulesError = (state: RootState) => state.modules.error;

export default modulesSlice.reducer;
