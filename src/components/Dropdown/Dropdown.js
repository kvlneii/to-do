import React, { useContext, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../../ThemeContext';

import { useOnClickOutside } from '../../hooks';

import './Dropdown.scss';

const Dropdown = ({ classNames, onOptionSelected, selectedOption, options }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedLabel, setSelectedLabel] = useState('Sorted by');

    const { theme, isDark } = useContext(ThemeContext);
    let menuRef = useRef();

    useEffect(() => {
        if (selectedOption) setSelectedLabel(selectedOption);
    }, []);

    useOnClickOutside(menuRef, () => {
        setIsOpen(false);
    });

    const handleOpen = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    const handleSortClick = (id, label) => {
        setSelectedLabel(label);
        onOptionSelected(id);
        setIsOpen(false);
    };

    const items = options.map(({ id, label }) => {
        return (
            <li
                key={id}
                className={`dropdown__item ${isDark ? ' dropdown__item--dark' : ''}`}
                onClick={() => handleSortClick(id, label)}>
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
                {items}
            </ul>
        </div>
    );
};

Dropdown.propTypes = {
    classNames: PropTypes.string,
    onOptionSelected: PropTypes.func.isRequired,
    selectedOption: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            label: PropTypes.string.isRequired
        })
    ).isRequired
};

export default Dropdown;
