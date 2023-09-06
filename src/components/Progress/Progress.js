import React from 'react';
import './Progress.css';
import { ThemeContext } from '../../theme-context';


const Progress = ({ toDo, allToDo }) => {
    const { theme } = React.useContext(ThemeContext);
    const completionPercentage = (toDo / allToDo) * 100;

    return (
        <div className='progress-bar'>
            <div className='progress-bar__text'>
                <span>All tasks</span>
                {toDo}/{allToDo}
            </div>
            <div className='progress-bar__filler' style={{ backgroundColor: theme.themeBackground }}>
                <div className='progress-bar__filler-color' style={{ width: `${completionPercentage}%` }}>
                    <div></div>
                </div>
            </div>
            <span className='progress-bar__tasks'>Today's tasks</span>
        </div>
    )
}

export default Progress