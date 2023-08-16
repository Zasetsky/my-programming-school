import React, { createContext, useState, ReactNode } from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { lightThemeColors, darkThemeColors } from "./colors";

type ThemeContextType = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({
  children,
}: ThemeProviderProps): JSX.Element => {
  const [darkMode, setDarkMode] = useState(false);

  const themeColors = darkMode ? darkThemeColors : lightThemeColors;

  const theme = createTheme({
    palette: {
      mode: themeColors.mode, // light или dark
      primary: {
        main: themeColors.primary.main,
      },
      secondary: {
        main: themeColors.secondary.main,
      },
      error: {
        main: themeColors.error.main,
      },
      warning: {
        main: themeColors.warning.main,
      },
      info: {
        main: themeColors.info.main,
      },
      success: {
        main: themeColors.success.main,
      },
      background: {
        default: themeColors.background.default,
        paper: themeColors.background.paper
      },
      action: {
        active: themeColors.action.active,
        hover: themeColors.action.hover,
        hoverOpacity: themeColors.action.hoverOpacity,
        selected: themeColors.action.selected,
        selectedOpacity: themeColors.action.selectedOpacity,
        disabled: themeColors.action.disabled,
        disabledBackground: themeColors.action.disabledBackground,
        disabledOpacity: themeColors.action.disabledOpacity,
        focus: themeColors.action.focus,
        focusOpacity: themeColors.action.focusOpacity,
        activatedOpacity: themeColors.action.activatedOpacity,
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
