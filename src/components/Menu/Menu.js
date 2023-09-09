import React, { useContext } from 'react';
import { ThemeContext } from '../../theme-context';
import './Menu.css';
import Button from '../Button/Button';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';

const Menu = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div
            className="wrapper"
            style={{
                backgroundColor: theme.secondaryBackgroundColor,
                color: theme.secondaryColor
            }}>
            <div className="menu">
                <div className="menu__container">
                    <h1 className="menu__container__label">To-do list</h1>
                    <Button label="Add new task" />
                </div>
                <ItemStatusFilter className="menu__statuses-container" />
            </div>
        </div>
    );
};

export default Menu;
