import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { MainPage } from "./pages/MainPage";

function App() {
  const theme = useTheme();

  return (
    <div style={{ backgroundColor: theme.palette.background.default, height: '100vh' }}>
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
