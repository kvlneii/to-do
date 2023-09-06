import React from 'react';
import './Settings.css';
import Darkmode from '../Darkmode/Darkmode';
import Progress from '../Progress/Progress';
import { ThemeContext } from '../../theme-context';

const Settings = ({ toDo, allToDo, todayTasks }) => {
    const { theme } = React.useContext(ThemeContext);

    return (
        <div className='wrapper' style={{ backgroundColor: theme.secondaryBackgroundColor }}>
            <div className='container'>
                <Darkmode />
                <Progress toDo={toDo} allToDo={allToDo} todayTasks={todayTasks} />
            </div>
        </div>
    )
}

export default Settings