import React, { useContext } from 'react';
import { ThemeContext } from '../../theme-context';
import './Darkmode.css';

const Darkmode = () => {
    const { theme, toggle } = useContext(ThemeContext);

    return (
        <div className='switcher'>
            <span className='switcher__text'>Darkmode</span>
            <label className="switcher__button" >
                <input type="checkbox" onClick={toggle} />
                <span className="slider" style={{ backgroundColor: theme.themeBackground }}></span>
            </label>
        </div>
    )
}

export default Darkmode