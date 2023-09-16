import React, { useEffect, useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import Menu from '../Menu/Menu';
import Dashboard from '../Dashboard/Dashboard';
import Settings from '../Settings/Settings';
import AddNewTask from '../AddNewTask/AddNewTask';
import './App.css';
import { useAppContext } from '../../AppContext';

const App = () => {
    const { isVisible, setCurrentDate, formatCurrentDate } = useAppContext();

    useEffect(() => {
        setCurrentDate(formatCurrentDate());
    }, []);

    const { theme } = useContext(ThemeContext);

    let classNames = 'app';
    classNames += isVisible ? ' covered' : '';

    return (
        <>
            <div
                className={classNames}
                style={{
                    backgroundColor: theme.primaryBackgroundColor,
                    color: theme.secondaryColor
                }}>
                <Menu />
                <Dashboard />
                <Settings />
            </div>

            {isVisible && (
                <div
                    className="app__add-section"
                    style={{
                        backgroundColor: theme.primaryBackgroundColor,
                        color: theme.secondaryColor
                    }}>
                    <AddNewTask />
                </div>
            )}
        </>
    );
};
export default App;
