import { useState, useEffect, useContext, useMemo } from 'react';

import { ThemeContext } from '../../ThemeContext';
import { useAppContext } from '../../AppContext';

import { allStatuses } from '../../consts';
import { todoUtil } from '../../utils';

import { SortMenu } from '../../components';

import './SortTasks.scss';

const SortTasks = () => {
    const [title, setTitle] = useState();

    const { theme } = useContext(ThemeContext);
    const { todoData, searchedTerm, filter, sortBy, setSortBy } = useAppContext();

    const todos = useMemo(() => {
        return todoUtil.getVisibleItems(todoData, searchedTerm, sortBy, filter);
    }, [todoData, searchedTerm, sortBy, filter]);

    useEffect(() => {
        const selectedStatus = allStatuses.find((status) => status.name === filter);
        if (selectedStatus) {
            setTitle(selectedStatus.label);
        }
    }, [filter]);

    const handleSortClick = (selectedSortOption) => {
        setSortBy(selectedSortOption);
    };

    return (
        <div className="sort-tasks">
            <h1 className="sort-tasks__title" style={{ color: theme.primaryColor }}>
                {title} ({todos.length} {todos.length === 1 ? 'task' : 'tasks'})
            </h1>

            <SortMenu
                classNames="sort-tasks__options"
                onClicked={(selectedSortOption) => handleSortClick(selectedSortOption)}
            />
        </div>
    );
};

export default SortTasks;
