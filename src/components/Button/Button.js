import { useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../../ThemeContext';

import './Button.scss';

const Button = ({ label, onClick }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <button className="btn" style={{ backgroundColor: theme.buttonsColor }} onClick={onClick}>
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Button;
