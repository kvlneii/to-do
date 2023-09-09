import React, { useContext } from 'react';
import './Progress.css';
import { ThemeContext } from '../../theme-context';
import { useAppContext } from '../../AppContext';

const Progress = () => {
    const { theme } = useContext(ThemeContext);
    const { toDo, allToDo, todayTasks } = useAppContext();
    const completionPercentage = (toDo / allToDo) * 100;

    const elements = todayTasks.map((item) => {
        let classNames = 'progress-bar__list__item';
        classNames += item.done ? ' progress-bar__list__item--completed' : '';
        classNames += item.important ? ' progress-bar__list__item--important' : '';

        return (
            <li key={item.id} className={classNames}>
                {item.label}
            </li>
        );
    });

    return (
        <div className="progress-bar">
            <div className="progress-bar__text">
                <span>All tasks</span>
                {toDo}/{allToDo}
            </div>
            <div
                className="progress-bar__filler"
                style={{ backgroundColor: theme.themeBackground }}>
                <div
                    className="progress-bar__filler-color"
                    style={{ width: `${completionPercentage}%` }}>
                    <div></div>
                </div>
            </div>
            <span className="progress-bar__tasks" style={{ color: theme.primaryColor }}>
                Today&apos;s tasks :
            </span>

            <ul className="progress-bar__list">
                {todayTasks.length === 0 ? <li>No tasks for today!</li> : elements}
            </ul>
        </div>
    );
};

export default Progress;
