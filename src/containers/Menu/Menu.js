import { useContext } from 'react';

import { ThemeContext } from '../../ThemeContext';
import { useAppContext } from '../../AppContext';

import { modalIds } from '../../consts';

import { Button, ItemStatusFilter } from '../../components';

import './Menu.scss';

const Menu = () => {
    const { theme } = useContext(ThemeContext);
    const { setActiveModalId, activeMobileMenu, setActiveMobileMenu } = useAppContext();

    return (
        <div
            className={`wrapper-mobile ${activeMobileMenu ? ' wrapper-mobile--active' : ''}`}
            onClick={() => setActiveMobileMenu(false)}>
            <div
                className={`wrapper-menu ${activeMobileMenu ? ' wrapper-menu--active' : ''}`}
                style={{
                    backgroundColor: theme.secondaryBackgroundColor,
                    color: theme.secondaryColor
                }}>
                <div className="menu" onClick={(e) => e.stopPropagation()}>
                    <div className="menu__container" onClick={() => setActiveMobileMenu(false)}>
                        <h1 className="menu__container__label">To-do list</h1>
                        <Button
                            label="Add new task"
                            onClick={() => setActiveModalId(modalIds.CREATE_TASK_MODAL)}
                        />
                    </div>
                    <ItemStatusFilter />
                </div>
            </div>
        </div>
    );
};

export default Menu;
