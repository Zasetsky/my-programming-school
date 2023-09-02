import { createTheme } from '@mui/material/styles';
import { lightThemeColors, darkThemeColors } from './colors';

export const createAppTheme = (
  themeColors: typeof lightThemeColors | typeof darkThemeColors,
) => {
  return createTheme({
    palette: {
      mode: themeColors.mode,
      primary: {
        main: themeColors.primary.main,
        light: themeColors.primary.light,
        dark: themeColors.primary.dark,
        contrastText: themeColors.primary.contrastText,
      },
      secondary: {
        main: themeColors.secondary.main,
        light: themeColors.secondary.light,
        dark: themeColors.secondary.dark,
        contrastText: themeColors.secondary.contrastText,
      },
      error: {
        main: themeColors.error.main,
        light: themeColors.error.light,
        dark: themeColors.error.dark,
        contrastText: themeColors.error.contrastText,
      },
      warning: {
        main: themeColors.warning.main,
        light: themeColors.warning.light,
        dark: themeColors.warning.dark,
        contrastText: themeColors.warning.contrastText,
      },
      info: {
        main: themeColors.info.main,
        light: themeColors.info.light,
        dark: themeColors.info.dark,
        contrastText: themeColors.info.contrastText,
      },
      success: {
        main: themeColors.success.main,
        light: themeColors.success.light,
        dark: themeColors.success.dark,
        contrastText: themeColors.success.contrastText,
      },
      text: {
        primary: themeColors.text.primary,
        secondary: themeColors.text.secondary,
        disabled: themeColors.text.disabled,
      },
      background: {
        default: themeColors.background.default,
        paper: themeColors.background.paper,
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
    typography: {
      fontFamily: '"Open Sans", sans-serif',
      // fontSize: 14, // Основной размер шрифта
      // fontWeightLight: 300, // Вес шрифта для 'light'
      // fontWeightRegular: 400, // Вес шрифта для 'regular'
      // fontWeightMedium: 500, // Вес шрифта для 'medium'
      // fontWeightBold: 700, // Вес шрифта для 'bold'
      // h1: {
      //   fontSize: '2rem',
      //   fontWeight: 500,
      // },
      // h2: {
      //   fontSize: '1.5rem',
      //   fontWeight: 500,
      // },
      // и так далее...
    },
  });
};
