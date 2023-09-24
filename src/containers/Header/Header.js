import { useContext } from 'react';

import { ThemeContext } from '../../ThemeContext';
import { useAppContext } from '../../AppContext';

import { modalIds } from '../../consts';
import { dateUtil } from '../../utils';
import { MenuIcon } from '../../icons';

import { Button, IconWrapper, SearchInput } from '../../components';

import './Header.scss';

const Header = () => {
    const { theme } = useContext(ThemeContext);
    const { setActiveModalId, setActiveMobileMenu } = useAppContext();

    return (
        <div className="header">
            <div className="header__search">
                <IconWrapper onClick={() => setActiveMobileMenu(true)} className={'header__icon'}>
                    <MenuIcon />
                </IconWrapper>
                <SearchInput />
            </div>
            <p className="header__date" style={{ color: theme.secondaryColor }}>
                {dateUtil.formatDate()}
            </p>
            <div className="header__btn header__btn--desktop">
                <Button
                    label="Add new task"
                    onClick={() => setActiveModalId(modalIds.CREATE_TASK_MODAL)}
                />
            </div>
            <div className="header__btn header__btn--mobile">
                <Button label="+" onClick={() => setActiveModalId(modalIds.CREATE_TASK_MODAL)} />
            </div>
        </div>
    );
};

export default Header;
