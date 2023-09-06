import React, { useContext } from 'react';
import { ThemeContext } from '../../theme-context';
import { useAppContext } from "../../AppContext";
import './Button.css';

const Button = ({ label }) => {
    const { theme } = useContext(ThemeContext);
    const { setIsVisible } = useAppContext();

    return (
        <button className='btn' style={{ backgroundColor: theme.buttonsColor }} onClick={() => setIsVisible(true)} >
            {label}
        </button>
    )
}

export default Button