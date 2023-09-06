import React, { useContext } from 'react';
import './ItemStatusFilter.css';
import { ThemeContext } from '../../theme-context';
import { allStatuses } from '../../filterOptions';
import { useAppContext } from "../../AppContext";

const ItemStatusFilter = () => {
    const { dark } = useContext(ThemeContext);
    const { filter, setFilter } = useAppContext();

    const statuses = allStatuses.map(({ name, label }) => {
        const isActive = filter === name;
        let statusClassNames = 'navigation__item'
        statusClassNames += dark ? ' navigation__item--darkMode' : '';
        statusClassNames += isActive ? (dark ? ' navigation__item--darkModeActive' : ' navigation__item--active') : '';

        return (
            <li
                className={statusClassNames}
                key={name}
                onClick={() => setFilter(name)}>
                {label}
            </li>
        );
    });

    return (
        <ul className="navigation">
            {statuses}
        </ul>
    )
}

export default ItemStatusFilter;