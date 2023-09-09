import { useContext } from 'react';

import { ThemeContext } from '../../ThemeContext';
import { useAppContext } from '../../AppContext';

import { modalIds } from '../../consts';

import { Button, SearchInput } from '../../components';
import './Header.css';

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
            <SearchInput />
            <p style={{ color: theme.secondaryColor }}>{formatDate()}</p>
            <div className="header__btn">
                <Button
                    label="Add new task"
                    onClick={() => setActiveModalId(modalIds.CREATE_TASK_MODAL)}
                />
            </div>
        </div>
    );
};

export default Header;
