import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './ThemeContext';
import { AppProvider } from './AppContext';

import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider>
        <AppProvider>
            <App />
        </AppProvider>
    </ThemeProvider>
);
