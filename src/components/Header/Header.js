import React, { useContext } from 'react';
import Button from '../Button/Button';
import SearchPanel from '../SearchPanel/SearchPanel';
import { ThemeContext } from '../../theme-context';
import { useAppContext } from '../../AppContext';
import './Header.css';

const Header = () => {
    const { theme } = useContext(ThemeContext);
    const { currentDate } = useAppContext();

    const formatDate = () => {
        const options = { month: 'short', day: '2-digit' };
        const date = new Date(currentDate);
        const formattedDate = date.toLocaleDateString('en-US', options);
        const year = date.getFullYear();
        return `${year}, ${formattedDate}`;
    };

    return (
        <div className="header">
            <SearchPanel />
            <p style={{ color: theme.secondaryColor }}>{formatDate()}</p>
            <div className="header__btn">
                <Button label="Add new task" />
            </div>
        </div>
    );
};

export default Header;
