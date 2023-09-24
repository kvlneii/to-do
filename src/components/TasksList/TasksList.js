import { useContext, useMemo } from 'react';

import { ThemeContext } from '../../ThemeContext';
import { useAppContext } from '../../AppContext';

import { todoUtil } from '../../utils';

import './TasksList.scss';

const TasksList = () => {
    const { theme } = useContext(ThemeContext);
    const { todoData } = useAppContext();

    const todayTasks = useMemo(() => {
        return todoUtil.getTodayTasks(todoData);
    }, [todoData]);

    const elements = todayTasks.map((item) => {
        let classNames = 'todos__item';
        classNames += item.done ? ' todos__item--completed' : '';
        classNames += item.important ? ' todos__item--important' : '';

        return (
            <li key={item.id} className={classNames}>
                {item.label}
            </li>
        );
    });

    return (
        <div className="todo-section">
            <span className="todo-section__title" style={{ color: theme.primaryColor }}>
                Today&apos;s tasks :
            </span>
            <ul className="todo-section__list todos">
                {todayTasks.length === 0 ? <li>No tasks for today!</li> : elements}
            </ul>
        </div>
    );
};

export default TasksList;
