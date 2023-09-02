import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';

import { ThemeProvider } from './assets/styles/theme/ThemeContext';
import '@fontsource/open-sans';
import './assets/styles/main.scss';
import 'normalize.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>,
  );
} else {
  console.error('Root element not found');
}

reportWebVitals();
