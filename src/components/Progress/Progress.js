import { useContext, useMemo } from 'react';
import { ThemeContext } from '../../ThemeContext';
import { useAppContext } from '../../AppContext';

import './Progress.css';
import { todoUtil } from '../../utils';

const Progress = () => {
    const { theme } = useContext(ThemeContext);
    const { todoData } = useAppContext();

    const completedTasks = useMemo(() => {
        return todoData.filter((el) => el.done)?.length ?? 0;
    }, [todoData]);

    const completionPercentage = useMemo(() => {
        return todoData?.length > 0 ? (completedTasks / todoData.length) * 100 : 0;
    }, [todoData, completedTasks]);

    const todayTasks = useMemo(() => {
        return todoUtil.getTodayTasks(todoData);
    }, [todoData]);

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
                {completedTasks}/{todoData?.length ?? 0}
            </div>
            <div
                className="progress-bar__filler"
                style={{ backgroundColor: theme.themeBackground }}
            >
                <div
                    className="progress-bar__filler-color"
                    style={{ width: `${completionPercentage}%` }}
                >
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
