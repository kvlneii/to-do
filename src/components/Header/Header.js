import React from 'react';
import Button from '../Button/Button';
import SearchPanel from '../SearchPanel/SearchPanel';
import { ThemeContext } from '../../theme-context';
import './Header.css';

const Header = ({ onSearchChange, setIsVisible, currentDate }) => {
    const { theme } = React.useContext(ThemeContext);

    const formatDate = () => {
        const options = { month: 'short', day: '2-digit' };
        const date = new Date(currentDate);
        const formattedDate = date.toLocaleDateString('en-US', options);
        const year = date.getFullYear();
        return `${year}, ${formattedDate}`;
    };

    return (
        <div className='header'>
            <SearchPanel onSearchChange={onSearchChange} />
            <p style={{ color: theme.secondaryColor }}>{formatDate()}</p>
            <div className='header__btn'>
                <Button label='Add new task' setIsVisible={setIsVisible} />
            </div>
        </div>
    )
}

export default Header