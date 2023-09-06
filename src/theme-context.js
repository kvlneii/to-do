import React from 'react'

const themes = {
    dark: {
        primaryBackgroundColor: '#0f172a',
        secondaryBackgroundColor: '#141e33',
        primaryColor: '#e2e8ec',
        secondaryColor: '#8a9eb7',
        primaryTitle: '#e2e8f0',
        buttonsColor: '#5b21b6',
        themeBackground: '#1d293e'
    },
    light: {
        primaryBackgroundColor: '#e2e8f0',
        secondaryBackgroundColor: '#f1f5f9',
        primaryColor: '#4a556b',
        secondaryColor: '#4b5e75',
        primaryTitle: '#47556a',
        buttonsColor: '#7c3aed',
        themeBackground: '#e2e8f0'
    }
}

const initialState = {
    dark: false,
    theme: themes.light,
    toggle: () => { }
}

const ThemeContext = React.createContext(initialState);

function ThemeProvider({ children }) {
    const [dark, setDark] = React.useState(false);

    React.useEffect(() => {
        const isDark = localStorage.getItem('dark') === 'true';
        setDark(isDark)
    }, [dark]);

    const toggle = () => {
        const isDark = !dark;
        localStorage.setItem('dark', JSON.stringify(isDark));
        setDark(isDark)
    };

    const theme = dark ? themes.dark : themes.light;

    return (
        <ThemeContext.Provider value={{ theme, toggle, dark }}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeProvider, ThemeContext }