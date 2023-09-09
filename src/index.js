import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { ThemeProvider } from './theme-context';
import { AppProvider } from './AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider>
        <AppProvider>
            <App />
        </AppProvider>
    </ThemeProvider>
);
