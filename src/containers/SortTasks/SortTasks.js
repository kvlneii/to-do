import { useState, useEffect, useContext, useMemo } from 'react';

import { ThemeContext } from '../../ThemeContext';
import { useAppContext } from '../../AppContext';

import { allStatuses, allSortOptions } from '../../consts';
import { todoUtil } from '../../utils';

import { Dropdown } from '../../components';

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

    const transformSortOptions = (options) => {
        return options.map((option) => {
            return {
                id: option.name,
                label: option.label
            };
        });
    };

    return (
        <div className="sort-tasks">
            <h1 className="sort-tasks__title" style={{ color: theme.primaryColor }}>
                {title} ({todos.length} {todos.length === 1 ? 'task' : 'tasks'})
            </h1>

            <Dropdown
                classNames="sort-tasks__options"
                onOptionSelected={(selectedSortOption) => handleSortClick(selectedSortOption)}
                options={transformSortOptions(allSortOptions)}
            />
        </div>
    );
};

export default SortTasks;
