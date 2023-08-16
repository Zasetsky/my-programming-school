import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from './assets/styles/theme/ThemeContext';
import { MainPage } from './pages/MainPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* Другие маршруты */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
