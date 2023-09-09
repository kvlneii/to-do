import React, { useContext } from 'react';
import './Settings.css';
import Darkmode from '../Darkmode/Darkmode';
import Progress from '../Progress/Progress';
import { ThemeContext } from '../../theme-context';

const Settings = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="wrapper" style={{ backgroundColor: theme.secondaryBackgroundColor }}>
            <div className="container">
                <Darkmode />
                <Progress />
            </div>
        </div>
    );
};

export default Settings;
