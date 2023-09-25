import { useContext } from 'react';

import { ThemeContext } from '../../ThemeContext';
import { useAppContext } from '../../AppContext';

import { modalIds } from '../../consts';
import { dateUtil } from '../../utils';
import { MenuIcon, SettingsIcon } from '../../icons';

import { Button, IconWrapper, SearchInput } from '../../components';

import './Header.scss';

const Header = () => {
    const { theme } = useContext(ThemeContext);
    const { setActiveModalId, setActiveMobileMenu, setActiveMobileSettings } = useAppContext();

    return (
        <div className="header">
            <div className="header__search">
                <IconWrapper
                    onClick={() => setActiveMobileMenu(true)}
                    className={'header__icon header__icon--menu'}>
                    <MenuIcon />
                </IconWrapper>
                <SearchInput />
            </div>
            <p className="header__date" style={{ color: theme.secondaryColor }}>
                {dateUtil.formatDate()}
            </p>

            <div className="header__actions">
                <div className="header__btn header__btn--desktop">
                    <Button
                        label="Add new task"
                        onClick={() => setActiveModalId(modalIds.CREATE_TASK_MODAL)}
                    />
                </div>

                <div className="header__btn header__btn--mobile">
                    <Button
                        label="+"
                        onClick={() => setActiveModalId(modalIds.CREATE_TASK_MODAL)}
                    />
                </div>

                <IconWrapper
                    onClick={() => setActiveMobileSettings(true)}
                    className={'header__icon header__icon--settings'}>
                    <SettingsIcon />
                </IconWrapper>
            </div>
        </div>
    );
};

export default Header;
