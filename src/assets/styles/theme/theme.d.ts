import { Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    customColors: {
      highlight: string;
    };
  }
  // позволяет использовать `createTheme`
  interface ThemeOptions {
    customColors?: {
      highlight: string;
    };
  }
}
