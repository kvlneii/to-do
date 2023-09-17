import { useContext } from 'react';

import { ThemeContext } from '../../ThemeContext';

import './Darkmode.scss';

const Darkmode = () => {
    const { theme, toggle, isDark } = useContext(ThemeContext);

    return (
        <div className="switcher">
            <label
                htmlFor="darkmode"
                className="switcher__text"
                style={{
                    color: theme.primaryColor
                }}>
                {isDark ? 'Light' : 'Dark'} <span className="switcher__text__span"> Mode</span>
            </label>
            <label className="switcher__button">
                <input id="darkmode" type="checkbox" onChange={toggle} checked={isDark} />
                <span
                    className="switcher__button__slider"
                    style={{ backgroundColor: theme.themeBackground }}></span>
            </label>
        </div>
    );
};

export default Darkmode;
