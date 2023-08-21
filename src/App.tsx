import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { MainPage } from './pages/MainPage';
import { getColorVariables } from './assets/styles/theme/colorsVariables';

function App() {
  const theme = useTheme();
  const colorVariables = getColorVariables(theme);

  useEffect(() => {
    const root = document.documentElement;

    Object.entries(colorVariables).forEach(([key, value]) => {
      root.style.setProperty(key, String(value)); // Приведение к строке
    });

    return () => {
      // Опционально: очищаем переменные при размонтировании
      Object.keys(colorVariables).forEach((key) => {
        root.style.removeProperty(key);
      });
    };
  }, [colorVariables]);

  return (
    <div
      style={{ background: 'var(--background-default)', minHeight: '100vh' }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* Другие маршруты */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
