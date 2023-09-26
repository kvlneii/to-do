import { useContext } from 'react';

import { ThemeContext } from '../../ThemeContext';
import { useAppContext } from '../../AppContext';

import { CloseIcon } from '../../icons';

import { Darkmode, Progress, TasksList, IconWrapper } from '../../components';

import './Settings.scss';

const Settings = () => {
    const { theme } = useContext(ThemeContext);
    const { activeMobileSettings, setActiveMobileSettings } = useAppContext();

    return (
        <>
            <div
                className={`wrapper-settings ${
                    activeMobileSettings ? ' wrapper-settings--active' : ''
                }`}
                onClick={() => setActiveMobileSettings(false)}></div>

            <div
                className={`settings ${activeMobileSettings ? ' settings--active' : ''}`}
                style={{ backgroundColor: theme.secondaryBackgroundColor }}>
                <div className="settings__container">
                    <IconWrapper
                        onClick={() => setActiveMobileSettings(false)}
                        className={'settings__icon'}>
                        <CloseIcon />
                    </IconWrapper>
                    <Darkmode />
                    <Progress />
                    <TasksList />
                </div>
            </div>
        </>
    );
};

export default Settings;
