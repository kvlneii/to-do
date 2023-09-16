import { useContext } from 'react';

import { ThemeContext } from '../../ThemeContext';
import { useAppContext } from '../../AppContext';

import { modalIds } from '../../consts';

import { Button, IconWrapper, SearchInput } from '../../components';
import './Header.scss';
import { MenuIcon } from '../../icons';

const Header = () => {
    const { theme } = useContext(ThemeContext);
    const { setActiveModalId } = useAppContext();

    const formatDate = () => {
        const options = { month: 'short', day: '2-digit' };
        const date = new Date();
        const formattedDate = date.toLocaleDateString('en-US', options);
        const year = date.getFullYear();
        return `${year}, ${formattedDate}`;
    };

    return (
        <div className="header">
            <div className="header__search">
                <IconWrapper onClick={() => {}} className={'header__search__icon'}>
                    <MenuIcon />
                </IconWrapper>
                <SearchInput />
            </div>
            <p className="header__date" style={{ color: theme.secondaryColor }}>
                {formatDate()}
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
