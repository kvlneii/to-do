import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';

import { Darkmode, Progress } from '../../components';
import './Settings.css';

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
