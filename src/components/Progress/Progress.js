import { useContext, useMemo } from 'react';

import { ThemeContext } from '../../ThemeContext';
import { useAppContext } from '../../AppContext';

import './Progress.scss';

const Progress = () => {
    const { theme } = useContext(ThemeContext);
    const { todoData } = useAppContext();

    const completedTasks = useMemo(() => {
        return todoData.filter((el) => el.done)?.length ?? 0;
    }, [todoData]);

    const completionPercentage = useMemo(() => {
        return todoData?.length > 0 ? (completedTasks / todoData.length) * 100 : 0;
    }, [todoData, completedTasks]);

    return (
        <div className="progress-bar">
            <div className="progress-bar__text">
                <span>All tasks</span>
                {completedTasks}/{todoData?.length ?? 0}
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
        </div>
    );
};

export default Progress;
