import { useState, useEffect, useContext, useMemo } from 'react';

import { ThemeContext } from '../../ThemeContext';
import { useAppContext } from '../../AppContext';

import { allStatuses, allSortOptions } from '../../consts';

import './SortTasks.css';
import { todoUtil } from '../../utils';

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

    const handleSortChange = (event) => {
        const selectedSortOption = event.target.value;
        setSortBy(selectedSortOption);
    };

    const options = allSortOptions.map(({ name, label }) => {
        return (
            <option value={name} key={name}>
                {label}
            </option>
        );
    });

    return (
        <div className="sort-tasks">
            <h1 className="sort-tasks__title" style={{ color: theme.primaryColor }}>
                {title} ({todos.length} {todos.length === 1 ? 'task' : 'tasks'})
            </h1>
            <select
                className="sort-tasks__options"
                style={{
                    backgroundColor: theme.secondaryBackgroundColor,
                    color: theme.secondaryColor
                }}
                onChange={handleSortChange}
                value={sortBy}
            >
                <option value="disabledOption" disabled hidden>
                    Sorted by
                </option>
                {options}
            </select>
        </div>
    );
};

export default SortTasks;
