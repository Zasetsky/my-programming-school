import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { useColorVariables } from './hooks/theme/useColorVariables';

function App() {
  useColorVariables();

  return (
    <div
      style={{ background: 'var(--background-default)', minHeight: '100vh' }}
    >
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
