import { useContext } from 'react';
import { ThemeContext } from '../assets/styles/theme/ThemeContext';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(`useTheme must be used within a ThemeProvider`);
  }
  return context;
};
