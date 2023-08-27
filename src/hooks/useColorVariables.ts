import { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { getColorVariables } from '../assets/styles/theme/colorsVariables';

export const useColorVariables = () => {
  const theme = useTheme();
  const colorVariables = getColorVariables(theme);

  useEffect(() => {
    const root = document.documentElement;

    Object.entries(colorVariables).forEach(([key, value]) => {
      root.style.setProperty(key, String(value));
    });

    return () => {
      Object.keys(colorVariables).forEach((key) => {
        root.style.removeProperty(key);
      });
    };
  }, [colorVariables]);
};
