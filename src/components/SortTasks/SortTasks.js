import React, { useState } from 'react';
import './SortTasks.css';
import { ThemeContext } from '../../theme-context';

const SortTasks = ({ todos, onFilterChange }) => {
    const [title, setTitle] = useState('All tasks');

    const { theme } = React.useContext(ThemeContext);
    const task = 'task';
    const tasks = 'tasks';

    const sortOptions = [
        { name: 'all', label: 'Sort by' },
        { name: 'important', label: 'Important tasks' },
        { name: 'completed', label: 'Completed tasks' },
        { name: 'uncompleted', label: 'Uncompleted tasks' },
        { name: 'currentDay', label: 'Today\'s tasks' }
    ];

    const handleSortChange = (event) => {
        const selectedSortOption = event.target.value;
        if (selectedSortOption === 'all') {
            setTitle('All tasks');
        } else {
            const selectedLabel = sortOptions.find(option => option.name === selectedSortOption).label;
            setTitle(selectedLabel);
        }
        onFilterChange(selectedSortOption);
    };

    const options = sortOptions.map(({ name, label }) => {
        return (
            <option
                value={name}
                key={name}
            >
                {label}
            </option>
        );
    });

    return (
        <div className="sort-tasks">
            <h1 className='sort-tasks__title' style={{ color: theme.primaryColor }}>
                {title} ({todos.length} {todos.length === 1 ? task : tasks})
            </h1>
            <select
                className="sort-tasks__options"
                style={{ backgroundColor: theme.secondaryBackgroundColor, color: theme.secondaryColor }}
                onChange={handleSortChange}>
                {options}
            </select>
        </div>
    )
}

export default SortTasks