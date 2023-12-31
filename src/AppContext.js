import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { statusIds } from './consts';

const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext);
};

const AppProvider = ({ children }) => {
    const [activeMobileMenu, setActiveMobileMenu] = useState(false);
    const [activeMobileSettings, setActiveMobileSettings] = useState(false);
    const [activeModalId, setActiveModalId] = useState();
    const [searchedTerm, setSearchedTerm] = useState('');
    const [filter, setFilter] = useState(statusIds.ALL);
    const [sortBy, setSortBy] = useState(null);
    const [todoData, setTodoData] = useState([]);

    const contextValue = {
        activeMobileMenu,
        setActiveMobileMenu,
        activeMobileSettings,
        setActiveMobileSettings,
        activeModalId,
        setActiveModalId,
        searchedTerm,
        setSearchedTerm,
        filter,
        setFilter,
        sortBy,
        setSortBy,
        todoData,
        setTodoData
    };

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.object]).isRequired
};

export { AppProvider };
