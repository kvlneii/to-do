import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../../theme-context';
import { useAppContext } from '../../AppContext';
import './Button.css';

const Button = ({ label }) => {
    const { theme } = useContext(ThemeContext);
    const { setIsVisible } = useAppContext();

    return (
        <button
            className="btn"
            style={{ backgroundColor: theme.buttonsColor }}
            onClick={() => setIsVisible(true)}>
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired
};

export default Button;
