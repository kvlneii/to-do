import { useContext } from 'react';

import { ThemeContext } from '../../ThemeContext';

import { Darkmode, Progress } from '../../components';

import './Settings.scss';

const Settings = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div
            className="settings-wrapper"
            style={{ backgroundColor: theme.secondaryBackgroundColor }}>
            <div className="settings-container">
                <Darkmode />
                <Progress />
            </div>
        </div>
    );
};

export default Settings;
