import React, { useState, useEffect, useContext } from 'react';
import './SortTasks.css';
import { ThemeContext } from '../../theme-context';
import { useAppContext } from '../../AppContext';
import { allStatuses, allSortOptions } from '../../filterOptions';

const SortTasks = () => {
    const [title, setTitle] = useState('All tasks');

    const { theme } = useContext(ThemeContext);
    const { filter, setSortBy, sortBy, visibleItems: todos } = useAppContext();

    const task = 'task';
    const tasks = 'tasks';

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
                {title} ({todos.length} {todos.length === 1 ? task : tasks})
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