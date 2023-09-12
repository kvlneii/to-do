import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import { useAppContext } from '../../AppContext';

import { allStatuses } from '../../consts';

import './ItemStatusFilter.scss';

const ItemStatusFilter = () => {
    const { isDark } = useContext(ThemeContext);
    const { filter, setFilter } = useAppContext();

    const statuses = allStatuses.map(({ name, label }) => {
        const isActive = filter === name;
        let statusClassNames = 'navigation__item';
        statusClassNames += isDark ? ' navigation__item--darkMode' : '';
        statusClassNames += isActive
            ? isDark
                ? ' navigation__item--darkModeActive'
                : ' navigation__item--active'
            : '';

        return (
            <li className={statusClassNames} key={name} onClick={() => setFilter(name)}>
                {label}
            </li>
        );
    });

    return <ul className="navigation">{statuses}</ul>;
};

export default ItemStatusFilter;
