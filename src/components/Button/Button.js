import React from 'react';
import { ThemeContext } from '../../theme-context';
import './Button.css';

const Button = ({ label, setIsVisible }) => {
    const { theme } = React.useContext(ThemeContext);

    return (
        <button className='btn' style={{ backgroundColor: theme.buttonsColor }} onClick={() => setIsVisible(true)} >
            {label}
        </button>
    )
}

// Button.defaultProps = {
//     setIsVisible: () => {
//         return setIsVisible(true);
//     }
// };

export default Button