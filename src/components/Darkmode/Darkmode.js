import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';

import './Darkmode.css';

const Darkmode = () => {
    const { theme, toggle, isDark } = useContext(ThemeContext);

    return (
        <div className="switcher">
            <label htmlFor="darkmode" className="switcher__text">
                {isDark ? 'Light Mode' : 'Dark Mode'}
            </label>
            <label className="switcher__button">
                <input id="darkmode" type="checkbox" onChange={toggle} checked={isDark} />
                <span className="slider" style={{ backgroundColor: theme.themeBackground }}></span>
            </label>
        </div>
    );
};

export default Darkmode;
