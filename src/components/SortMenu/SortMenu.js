import React, { useContext, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { allSortOptions } from '../../consts';
import { ThemeContext } from '../../ThemeContext';

import './SortMenu.scss';

const SortMenu = ({ classNames, onClicked }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedLabel, setSelectedLabel] = useState('Sorted by');

    const { theme, isDark } = useContext(ThemeContext);
    let menuRef = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);

    const handleOpen = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    const handleSortClick = (name, label) => {
        setSelectedLabel(label);
        onClicked(name);
        setIsOpen(false);
    };

    const options = allSortOptions.map(({ name, label }) => {
        return (
            <li
                key={name}
                className={`dropdown__item ${isDark ? ' dropdown__item--dark' : ''}`}
                onClick={() => handleSortClick(name, label)}>
                {label}
            </li>
        );
    });

    return (
        <div
            className={`dropdown ${classNames}`}
            ref={menuRef}
            style={{
                backgroundColor: theme.secondaryBackgroundColor,
                color: theme.secondaryColor
            }}>
            <button className="dropdown__btn" onClick={handleOpen}>
                <span>{selectedLabel}</span>
                <span
                    className={`dropdown__arrow  ${
                        isOpen ? ' dropdown__arrow--active' : ''
                    }`}></span>
            </button>

            <ul className={`dropdown__content ${isOpen ? ' dropdown__content--active' : ''}`}>
                {options}
            </ul>
        </div>
    );
};

SortMenu.propTypes = {
    classNames: PropTypes.string.isRequired,
    onClicked: PropTypes.func.isRequired
};

export default SortMenu;
