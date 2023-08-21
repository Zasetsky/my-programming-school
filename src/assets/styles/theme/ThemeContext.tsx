import React, { createContext, useState, ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { lightThemeColors, darkThemeColors } from './colors';
import { createAppTheme } from './createAppTheme';

type ThemeContextType = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({
  children,
}: ThemeProviderProps): JSX.Element => {
  const [darkMode, setDarkMode] = useState(false);

  const themeColors = darkMode ? darkThemeColors : lightThemeColors;

  const theme = createAppTheme(themeColors);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
