import React, { useState, useContext } from 'react';
import './SearchPanel.css';
import { ThemeContext } from '../../ThemeContext';
import { useAppContext } from '../../AppContext';

const SearchPanel = () => {
    const { theme } = useContext(ThemeContext);
    const [term, setTerm] = useState('');
    const { onSearchChange } = useAppContext();

    const handleSearchChange = (e) => {
        const newTerm = e.target.value;
        setTerm(newTerm);
        onSearchChange(newTerm);
    };

    return (
        <div className="search-panel">
            <input
                type="text"
                className="search-panel__input"
                placeholder="Search task"
                onChange={handleSearchChange}
                value={term}
                style={{
                    backgroundColor: theme.secondaryBackgroundColor,
                    color: theme.secondaryColor
                }}
            />

            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke={theme.secondaryColor}
                className="search-panel__icon">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
            </svg>
        </div>
    );
};

export default SearchPanel;
